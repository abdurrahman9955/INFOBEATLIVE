import ffmpeg from "fluent-ffmpeg";
import ffmpegStatic from "ffmpeg-static";
import fs from "fs";
import path from "path";
import uploadToS3 from "./amazonS3";

ffmpeg.setFfmpegPath(ffmpegStatic as string);

interface Resolution {
    resolution: string;
    videoBitrate: string;
    audioBitrate: string;
}

const processAndUploadVideo = async (
    filePath: string,
    fileName: string
): Promise<void> => {
    const resolutions: Resolution[] = [
        { resolution: "256x144", videoBitrate: "200k", audioBitrate: "32k" },
        { resolution: "426x240", videoBitrate: "500k", audioBitrate: "64k" },
        { resolution: "640x360", videoBitrate: "1000k", audioBitrate: "96k" },
        { resolution: "854x480", videoBitrate: "1500k", audioBitrate: "128k" },
        { resolution: "1280x720", videoBitrate: "3000k", audioBitrate: "192k" },
        { resolution: "1920x1080", videoBitrate: "4500k", audioBitrate: "256k" }
    ];

    const hlsFolder = path.join(__dirname, "hls");
    if (!fs.existsSync(hlsFolder)) fs.mkdirSync(hlsFolder);

    const variantPlaylists: { resolution: string; outputFileName: string }[] = [];

    for (const { resolution, videoBitrate, audioBitrate } of resolutions) {
        const outputFileName = `${fileName}_${resolution}.m3u8`;
        const segmentFileName = `${fileName}_${resolution}_%03d.ts`;

        await new Promise<void>((resolve, reject) => {
            ffmpeg(filePath)
                .outputOptions([
                    `-c:v h264`,
                    `-b:v ${videoBitrate}`,
                    `-c:a aac`,
                    `-b:a ${audioBitrate}`,
                    `-vf scale=${resolution}`,
                    `-f hls`,
                    `-hls_time 10`,
                    `-hls_list_size 0`,
                    `-hls_segment_filename ${path.join(hlsFolder, segmentFileName)}`
                ])
                .output(path.join(hlsFolder, outputFileName))
                .on("end", () => resolve())
                .on("error", (err) => reject(err))
                .run();
        });

        variantPlaylists.push({ resolution, outputFileName });
    }

    const masterPlaylist = `#EXTM3U\n` + variantPlaylists
        .map(({ resolution, outputFileName }) => {
            const bandwidth =
                resolution === "256x144" ? 280000 :
                resolution === "426x240" ? 750000 :
                resolution === "640x360" ? 1250000 :
                resolution === "854x480" ? 1875000 :
                resolution === "1280x720" ? 4000000 :
                6000000;
            return `#EXT-X-STREAM-INF:BANDWIDTH=${bandwidth},RESOLUTION=${resolution}\n${outputFileName}`;
        })
        .join("\n");

    const masterPlaylistPath = path.join(hlsFolder, `${fileName}_master.m3u8`);
    fs.writeFileSync(masterPlaylistPath, masterPlaylist);

    // Upload HLS files to S3
    const files = fs.readdirSync(hlsFolder);
    for (const file of files) {
        const filePath = path.join(hlsFolder, file);
        const fileStream = fs.createReadStream(filePath);
        const fileContentType = file.endsWith('.ts') ? 'video/mp2t' : 'application/x-mpegURL';
        await uploadToS3(process.env.AWS_BUCKET!, `hls/${file}`, fileStream, fileContentType);
        fs.unlinkSync(filePath);
    }

    // Generate Thumbnail
    const thumbnailPath = path.join(__dirname, `${fileName}_thumbnail.jpg`);
    await new Promise<void>((resolve, reject) => {
        ffmpeg(filePath)
            .screenshots({
                count: 1,
                folder: __dirname,
                filename: `${fileName}_thumbnail.jpg`,
                size: "640x360"
            })
            .on("end", () => resolve())
            .on("error", (err) => reject(err));
    });

    // Upload Thumbnail to S3
    const thumbnailStream = fs.createReadStream(thumbnailPath);
    await uploadToS3(process.env.AWS_BUCKET!, `thumbnails/${fileName}_thumbnail.jpg`, thumbnailStream, 'image/jpeg');
    fs.unlinkSync(thumbnailPath);

    console.log("Video processing and upload complete.");
};

export default processAndUploadVideo;

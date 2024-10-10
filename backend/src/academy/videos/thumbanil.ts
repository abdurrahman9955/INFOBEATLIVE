import sharp from 'sharp';

/**
 * Process the uploaded thumbnail using Sharp.
 * @param filePath - The local path of the uploaded thumbnail.
 * @returns The processed image as a Buffer.
 */
const processThumbnail = async (filePath: string): Promise<Buffer> => {
    return await sharp(filePath)
        .resize(640, 360, {
            fit: sharp.fit.cover,
            position: sharp.strategy.entropy
        })
        .jpeg({ quality: 80 })
        .toBuffer();
};

export default processThumbnail;
import express, { Request, Response } from 'express';
import multer, { Multer } from 'multer';
import processAndUploadVideo from './ffmpeg';
import saveMediaRecord from './createVideo';
import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

const bootcampBeginnerClassCourseVideos = Router();

const upload: Multer = multer({ dest: 'uploads/' });
const prisma = new PrismaClient();

interface UploadRequest extends Request {
    body: {
        sectionId: string;
        instructorId:string;
        title: string;
    };
}

bootcampBeginnerClassCourseVideos.use(express.json());

// Upload Route
bootcampBeginnerClassCourseVideos.post('/upload', upload.single('video'), async (req: UploadRequest, res: Response) => {
    try {
        const {  title } = req.body;
        const { sectionId, instructorId} = req.params;
        const filePath = req.file!.path;
        const fileName = req.file!.filename;

        await processAndUploadVideo(filePath, fileName);

        const contentUrl = `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/hls/${fileName}_master.m3u8`;
        const thumbnailUrl = `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/thumbnails/${fileName}_thumbnail.jpg`;

        await saveMediaRecord(sectionId, instructorId, contentUrl, title);

        res.status(201).json({ success: true, data: { contentUrl, thumbnailUrl } });
    } catch (error) {
        console.error('Error processing video:', error);
        res.status(500).json({ success: false, message: 'Error processing video' });
    }
});

bootcampBeginnerClassCourseVideos.get('/media/course/:courseId', async (req: Request, res: Response) => {
    try {
        const { sectionId } = req.params;

        const mediaList = await prisma.bootcampCourseVideo.findMany({
            where: {
                 type: 'VIDEO',
                 sectionId: sectionId,
                 level:'BEGINNER',
                },
        });

        if (mediaList.length === 0) {
            return res.status(404).json({ success: false, message: 'No media found for this group' });
        }

        res.status(200).json({ success: true, data: mediaList });
    } catch (error) {
        console.error('Error retrieving media for group:', error);
        res.status(500).json({ success: false, message: 'Error retrieving media for group' });
    }
});


bootcampBeginnerClassCourseVideos.get('/media/course/:courseId/user/:userId', async (req: Request, res: Response) => {
    try {
        const { sectionId, instructorId } = req.params;

        const mediaList = await prisma.bootcampCourseVideo.findMany({
            where: {
                type: 'VIDEO',
                sectionId: sectionId,
                instructorId: instructorId,
                level:'BEGINNER',
            },
        });

        if (mediaList.length === 0) {
            return res.status(404).json({ success: false, message: 'No media found for this group and user' });
        }

        res.status(200).json({ success: true, data: mediaList });
    } catch (error) {
        console.error('Error retrieving media for group and user:', error);
        res.status(500).json({ success: false, message: 'Error retrieving media for group and user' });
    }
});


// Get Media Route
bootcampBeginnerClassCourseVideos.get('/media/:id', async (req: Request, res: Response) => {
    try {
        const media = await prisma.bootcampCourseVideo.findUnique({
            where: {
                type: 'VIDEO',
                 id: req.params.id,
                 level:'BEGINNER',
                },
        });

        if (!media) {
            return res.status(404).json({ success: false, message: 'Media not found' });
        }

        res.status(200).json({ success: true, data: media });
    } catch (error) {
        console.error('Error retrieving media:', error);
        res.status(500).json({ success: false, message: 'Error retrieving media' });
    }
});

// Delete Media Route
bootcampBeginnerClassCourseVideos.delete('/media/:id', async (req: Request, res: Response) => {
    try {

        const { sectionId, instructorId } = req.params;

        const media = await prisma.bootcampCourseVideo.delete({
            where: {
                type: 'VIDEO',
                 id: req.params.id,
                 sectionId:sectionId,
                 instructorId: instructorId,
                 level:'BEGINNER',
                 },
        });

        if (!media) {
            return res.status(404).json({ success: false, message: 'Media not found' });
        }

        res.status(200).json({ success: true, message: 'Media deleted successfully' });
    } catch (error) {
        console.error('Error deleting media:', error);
        res.status(500).json({ success: false, message: 'Error deleting media' });
    }
});

// Update Media Route
bootcampBeginnerClassCourseVideos.put('/media/:id', async (req: Request, res: Response) => {
    try {
        const { title } = req.body;
        const { sectionId, instructorId } = req.params;

        const media = await prisma.bootcampCourseVideo.update({
            where: {
                 type: 'VIDEO',
                 id: req.params.id,
                 sectionId,
                 instructorId,
                 level:'BEGINNER',

                },
            data: { title },
        });

        if (!media) {
            return res.status(404).json({ success: false, message: 'Media not found' });
        }

        res.status(200).json({ success: true, data: media });
    } catch (error) {
        console.error('Error updating media:', error);
        res.status(500).json({ success: false, message: 'Error updating media' });
    }
});


export default bootcampBeginnerClassCourseVideos;
import express, { Request, Response } from 'express';
import multer, { Multer } from 'multer';
import processAndUploadVideo from './ffmpeg';
import saveMediaRecord from './uploadVideos';
import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

const academyAdvanceClassVideos = Router();

const upload: Multer = multer({ dest: 'uploads/' });
const prisma = new PrismaClient();

interface UploadRequest extends Request {
    body: {
        classId: string;
        userId: string;
        title: string;
        description: string;
    };
}

academyAdvanceClassVideos.use(express.json());

// Upload Route
academyAdvanceClassVideos.post('/upload', upload.fields([{ name: 'video' }, { name: 'thumbnail', maxCount: 1 }]), async (req: UploadRequest, res: Response) => {
    try {
        const {  title, description } = req.body;
        const { classId, userId } = req.params;
        const filePath = req.file!.path;
        const fileName = req.file!.filename;

        await processAndUploadVideo(filePath, fileName);

        const contentUrl = `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/hls/${fileName}_master.m3u8`;
        const thumbnailUrl = `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/thumbnails/${fileName}_thumbnail.jpg`;

        await saveMediaRecord(classId, userId, contentUrl, thumbnailUrl, title, description);

        res.status(201).json({ success: true, data: { contentUrl, thumbnailUrl } });
    } catch (error) {
        console.error('Error processing video:', error);
        res.status(500).json({ success: false, message: 'Error processing video' });
    }
});

academyAdvanceClassVideos.get('/media/group/:groupId', async (req: Request, res: Response) => {
    try {
        const { classId } = req.params;

        const mediaList = await prisma.academyClassMediaUpload.findMany({
            where: { 
                type: 'NORMAL_VIDEO',
                classId: classId },
                level:'ADVANCED'
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

academyAdvanceClassVideos.get('/media/group/:groupId/user/:userId', async (req: Request, res: Response) => {
    try {
        const { classId, userId } = req.params;

        const mediaList = await prisma.academyClassMediaUpload.findMany({
            where: {
                type: 'NORMAL_VIDEO',
                classId: classId,
                userId: userId,
                level:'ADVANCED'
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
academyAdvanceClassVideos.get('/media/:id', async (req: Request, res: Response) => {
    try {
        const media = await prisma.academyClassMediaUpload.findUnique({
            where: {
                 type: 'NORMAL_VIDEO',
                 id: req.params.id,
                 level:'ADVANCED'
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
academyAdvanceClassVideos.delete('/media/:id', async (req: Request, res: Response) => {
    try {
        const media = await prisma.academyClassMediaUpload.delete({
            where: {
                type: 'NORMAL_VIDEO',
                 id: req.params.id,
                 level:'ADVANCED'
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
academyAdvanceClassVideos.put('/media/:id', async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;

        const media = await prisma.academyClassMediaUpload.update({
            where: {
                 type: 'NORMAL_VIDEO',
                 id: req.params.id,
                 level:'ADVANCED'
                },
            data: { title, description },
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


export default academyAdvanceClassVideos;
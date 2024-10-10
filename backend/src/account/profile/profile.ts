import { PrismaClient } from '@prisma/client';
import multer, { MulterError } from 'multer';
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';
import express, { Request, Response } from 'express';
import { ObjectCannedACL } from '@aws-sdk/client-s3'; 

const prisma = new PrismaClient();
const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.MY_S3_ACCESS_KEY!,
    secretAccessKey: process.env.MY_S3_SECRET_KEY!,
  },
  region: process.env.MY_S3_REGION!,
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image');

interface UploadResponse {
  success: boolean;
  message?: string;
  error?: string;
}

interface GetProfileResponse {
    success: boolean;
    imageUrl?: string;
    error?: string;
  }
  
  interface DeleteProfileResponse {
    success: boolean;
    message?: string;
    error?: string;
  }

const handleFileUpload = async (req: Request, res: Response<UploadResponse>): Promise<void> => {
  try {
    await new Promise<void>((resolve, reject) => {
      upload(req, res, (err: any) => {
        if (err) {
          if (err instanceof MulterError) {
            return reject(new Error(`Multer error: ${err.message}`));
          }
          return reject(err);
        }
        resolve();
      });
    });

    const userId = req.params.userId;
    const file = req.file;

    if (!file) {
      res.status(400).json({ success: false, error: 'No file provided', message: 'Upload failed' });
      return;
    }

    const uniqueFilename = uuidv4();
    const imageKey = `profile/${userId}/images/${uniqueFilename}.${file.originalname.split('.').pop()}`;
    const processedImageBuffer = await sharp(file.buffer)
      .resize({ width: 300, height: 300 })
      .toBuffer();

    const uploadParams = {
      Bucket: process.env.MY_S3_BUCKET_NAME!,
      Key: imageKey,
      Body: processedImageBuffer,
      ACL: 'public-read' as ObjectCannedACL, // Cast the string to ObjectCannedACL
    };

    const uploadResult = await s3.send(new PutObjectCommand(uploadParams));

    if (!uploadResult) {
      console.error('Error: Upload result is missing.');
      res.status(500).json({ success: false, error: 'Upload failed', message: 'Upload failed' });
      return;
    }

    const bucketUrl = `https://${process.env.MY_S3_BUCKET_NAME}.s3.${process.env.MY_S3_REGION}.amazonaws.com`;
    const fileUrl = `${bucketUrl}/${imageKey}`;

    const existingProfile = await prisma.profile.findUnique({
      where: { userId: parseInt(userId) },
    });

    if (existingProfile) {
      await prisma.profile.update({
        where: { userId: parseInt(userId) },
        data: { photoUrl: fileUrl },
      });
    } else {
      await prisma.profile.create({
        data: {
          userId: parseInt(userId),
          photoUrl: fileUrl,
        },
      });
    }

    res.status(201).json({ success: true, message: 'Profile image uploaded successfully' });
  } catch (error) {
    console.error('Error uploading profile image:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error', message: 'Upload failed' });
  }
};

const profileRoutes = express.Router();


profileRoutes.post('/upload/:userId', handleFileUpload);


profileRoutes.get('/get/:userId', async (req: Request<{ userId: string }>, res: Response<GetProfileResponse>) => {
    try {
      const userId = req.params.userId; 
  
      const user = await prisma.profile.findUnique({
        where: { userId: parseInt(userId, 10) },
        select: { photoUrl: true },
      });
  
      if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
      }
  
      if (!user.photoUrl) {
        return res.status(404).json({ success: false, error: 'Profile image not found' });
      }
  
      res.status(200).json({ success: true, imageUrl: user.photoUrl });
    } catch (error) {
      console.error('Error getting profile image:', error);
      if (error instanceof prisma.PrismaClientKnownRequestError) {
        return res.status(500).json({ success: false, error: 'Database Error' });
      }
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });
  
  profileRoutes.delete('/delete/:userId', async (req: Request<{ userId: string }>,  res: Response<DeleteProfileResponse>) => {
    try {
      const userId = req.params.userId; 
  
      const user = await prisma.profile.findUnique({
        where: { userId: parseInt(userId, 10) },
        select: { photoUrl: true },
      });
  
      if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
      }
  
      if (!user.photoUrl) {
        return res.status(404).json({ success: false, error: 'Profile image not found' });
      }
  
      const imageKey = user.photoUrl.split('/').slice(-1)[0];
      const deleteParams = {
        Bucket: process.env.MY_S3_BUCKET_NAME!,
        Key: `profile/${userId}/images/${imageKey}`, 
      };
  
      await s3.send(new DeleteObjectCommand(deleteParams));
  
      await prisma.profile.update({
        where: { userId: parseInt(userId, 10) },
        data: { photoUrl: null },
      });
  
      res.status(200).json({ success: true, message: 'Profile image deleted successfully' });
    } catch (error) {
      console.error('Error deleting profile image:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });

export default profileRoutes;

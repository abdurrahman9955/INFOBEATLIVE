import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const saveMediaRecord = async (
    classId: string,
    userId: string,
    title: string,
    description: string,
    contentUrl: string,
    thumbnailUrl: string
): Promise<void> => {
    await prisma.bootcampClassMediaUpload.create({
        data: {
            classId,
            userId,
            title,
            description,
            type: 'NORMAL_VIDEO',  // Assuming type is of enum MediaType
            contentUrl,
            thumbnailUrl,
        }
    });
};

export default saveMediaRecord;
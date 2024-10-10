import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const saveMediaRecord = async (
    academyId: string,
    userId: string,
    title: string,
    description: string,
    contentUrl: string,
    thumbnailUrl: string
): Promise<void> => {
    await prisma.academyMediaUpload.create({
        data: {
            academyId,
            userId,
            title,
            description,
            type: 'SHORT_VIDEO', 
            contentUrl,
            thumbnailUrl,
        }
    });
};

export default saveMediaRecord;
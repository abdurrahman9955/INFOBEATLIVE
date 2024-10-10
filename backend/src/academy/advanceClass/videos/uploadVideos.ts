import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const saveMediaRecord = async (
    groupId: string,
    userId: string,
    title: string,
    description: string,
    contentUrl: string,
    thumbnailUrl: string
): Promise<void> => {
    await prisma.academyClassMediaUpload.create({
        data: {
            groupId,
            userId,
            title,
            description,
            type: 'NORMAL_VIDEO',  // Assuming type is of enum GroupMediaType
            contentUrl,
            thumbnailUrl,
            level:'ADVANCED'
        }
    });
};

export default saveMediaRecord;
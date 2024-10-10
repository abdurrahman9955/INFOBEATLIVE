import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const saveMediaRecord = async (
    userId: string,
    title: string,
    description: string,
    contentUrl: string,
    thumbnailUrl: string
): Promise<void> => {
    await prisma.post.create({
        data: {
            userId,
            title,
            description,
            type:'VIDEO', 
            contentUrl,
            thumbnailUrl,
        }
    });
};

export default saveMediaRecord;
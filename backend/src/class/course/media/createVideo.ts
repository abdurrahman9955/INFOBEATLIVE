import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const saveMediaRecord = async (
    sectionId: string,
    title: string,
    instructorId: string,
    url: string,
): Promise<void> => {
    await prisma.courseMedia.create({
        data: {
            sectionId,
            instructorId,
            title,
            type: 'VIDEO', 
            url,
        }
    });
};

export default saveMediaRecord;
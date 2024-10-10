import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const saveMediaRecord = async (
    sectionId: string,
    title: string,
    instructorId: string,
    url: string,
): Promise<void> => {
    await prisma.academyCourseVideo.create({
        data: {
            sectionId,
            instructorId,
            title,
            type: 'VIDEO', 
            level:'INTERMEDIATE',
            url,
        }
    });
};

export default saveMediaRecord;
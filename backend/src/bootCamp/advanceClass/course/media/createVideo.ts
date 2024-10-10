import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const saveMediaRecord = async (
    sectionId: string,
    title: string,
    instructorId: string,
    url: string,
): Promise<void> => {
    await prisma.bootcampCourseVideo.create({
        data: {
            sectionId,
            instructorId,
            title,
            type: 'VIDEO', 
            level:'ADVANCED',
            url,
        }
    });
};

export default saveMediaRecord;
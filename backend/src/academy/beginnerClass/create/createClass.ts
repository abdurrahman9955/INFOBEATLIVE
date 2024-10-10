import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface AcademyClassInput {
    name: string;
    purpose: string;
    rules: string;
    description: string;
    icon: string;
    academyId: string;
    createdBy: string;
}

// Functions for Beginner Class
export const createBeginnerClass = async (data: AcademyClassInput) => {
    return await prisma.academyClass.create({
        data: {
            ...data,
            level: 'BEGINNER',
        },
    });
};

export const getBeginnerClassById = async (id: string) => {
    return await prisma.academyClass.findUnique({
        where: { id ,
                 level: 'BEGINNER',
        },
        include: {
            academy: true,
            creator: true,
        },
    });
};

export const getAllBeginnerClasses = async (academyId: string) => {
    return await prisma.academyClass.findMany({
        where: {
            academyId,
            level: 'BEGINNER',
        },
        include: {
            academy: true,
            creator: true,
        },
    });
};

export const updateBeginnerClass = async (id: string, createdBy: string,  data: Partial<AcademyClassInput>) => {
    const academyClass = await prisma.academyClass.findUnique({ where: { id } });

    if (!academyClass) {
        throw new Error('Academy Class not found');
    }

    if (academyClass.createdBy !== createdBy) {
        throw new Error('Not authorized to update this class');
    }

    return await prisma.academyClass.update({
        where: { id,
                 level: 'BEGINNER',
         },
        data,
    });
};

export const deleteBeginnerClass = async (id: string, createdBy: string) => {
    const academyClass = await prisma.academyClass.findUnique({ where: { id } });

    if (!academyClass) {
        throw new Error('Academy Class not found');
    }

    if (academyClass.createdBy !== createdBy) {
        throw new Error('Not authorized to delete this class');
    }

    await prisma.academyClass.delete({
        where: { id,
                 level: 'BEGINNER',
         },
    });
};

export const getBeginnerClassesByAcademyAndCreator = async (academyId: string, createdBy: string) => {
    return await prisma.academyClass.findMany({
        where: {
            academyId,
            createdBy,
            level: 'BEGINNER', // Ensure you're fetching only BEGINNER classes
        },
        include: {
            academy: true,
            creator: true,
        },
    });
};

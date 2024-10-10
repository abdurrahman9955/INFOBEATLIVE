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

// Functions for Advanced Class
export const createAdvancedClass = async (data: AcademyClassInput) => {
    return await prisma.academyClass.create({
        data: {
            ...data,
            level: 'ADVANCED',
        },
    });
};

export const getAdvancedClassById = async (id: string) => {
    return await prisma.academyClass.findUnique({
        where: { id,
                 level: 'ADVANCED',
         },
        include: {
            academy: true,
            creator: true,
        },
    });
};

export const getAllAdvancedClasses = async (academyId: string) => {
    return await prisma.academyClass.findMany({
        where: {
            academyId,
            level: 'ADVANCED',
        },
        include: {
            academy: true,
            creator: true,
        },
    });
};

export const updateAdvancedClass = async (id: string, createdBy: string,   data: Partial<AcademyClassInput>) => {
    const academyClass = await prisma.academyClass.findUnique({ where: { id } });

    if (!academyClass) {
        throw new Error('Bootcamp Class not found');
    }

    if (academyClass.createdBy !== createdBy) {
        throw new Error('Not authorized to update this class');
    }

    return await prisma.academyClass.update({
        where: { id,
                 level: 'ADVANCED',
         },
        data,
    });
};

export const deleteAdvancedClass = async (id: string, createdBy: string) => {
    const academyClass = await prisma.academyClass.findUnique({ where: { id } });

    if (!academyClass) {
        throw new Error('Bootcamp Class not found');
    }

    if (academyClass.createdBy !== createdBy) {
        throw new Error('Not authorized to delete this class');
    }

    await prisma.academyClass.delete({
        where: { id,
                 level: 'ADVANCED',
         },
    });
};

export const getAdvanceClassesByBootcampAndCreator = async (academyId: string, createdBy: string) => {
    return await prisma.academyClass.findMany({
        where: {
            academyId,
            createdBy,
            level: 'ADVANCED', // Ensure you're fetching only BEGINNER classes
        },
        include: {
            academy: true,
            creator: true,
        },
    });
};

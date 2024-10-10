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

// Functions for Intermediate Class
export const createIntermediateClass = async (data: AcademyClassInput) => {
    return await prisma.academyClass.create({
        data: {
            ...data,
            level: 'INTERMEDIATE',
        },
    });
};

export const getIntermediateClassById = async (id: string) => {
    return await prisma.academyClass.findUnique({
        where: { id,
                 level: 'INTERMEDIATE',
         },
        include: {
            academy: true,
            creator: true,
        },
    });
};

export const getAllIntermediateClasses = async (academyId: string) => {
    return await prisma.academyClass.findMany({
        where: {
            academyId,
            level: 'INTERMEDIATE',
        },
        include: {
            bootcamp: true,
            creator: true,
        },
    });
};


export const updateIntermediateClass = async (id: string, createdBy: string,  data: Partial<AcademyClassInput>) => {
    const academyClass = await prisma.academyClass.findUnique({ where: { id } });

    if (!academyClass) {
        throw new Error('Academy Class not found');
    }

    if (academyClass.createdBy !== createdBy) {
        throw new Error('Not authorized to update this class');
    }

    return await prisma.academyClass.update({
        where: { id,
                 level: 'INTERMEDIATE',
         },
        data,
    });
};

export const deleteIntermediateClass = async (id: string, createdBy: string) => {
    const academyClass = await prisma.academyClass.findUnique({ where: { id } });

    if (!academyClass) {
        throw new Error('Bootcamp Class not found');
    }

    if (academyClass.createdBy !== createdBy) {
        throw new Error('Not authorized to delete this class');
    }

    await prisma.academyClass.delete({
        where: { id,
                 level: 'INTERMEDIATE',
         },
    });
};

export const getIntermediateClassesByCreator = async (academyId: string, createdBy: string) => {
    return await prisma.academyClass.findMany({
        where: {
            academyId,
            createdBy,
            level: 'INTERMEDIATE', // Ensure you're fetching only INTERMEDIATE classes
        },
        include: {
            academy: true,
            creator: true,
        },
    });
};


import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface BootcampClassInput {
    name: string;
    purpose: string;
    rules: string;
    description: string;
    icon: string;
    bootcampId: string;
    createdBy: string;
}

// Functions for Intermediate Class
export const createIntermediateClass = async (data: BootcampClassInput) => {
    return await prisma.bootcampClass.create({
        data: {
            ...data,
            level: 'INTERMEDIATE',
        },
    });
};

export const getIntermediateClassById = async (id: string) => {
    return await prisma.bootcampClass.findUnique({
        where: { id,
                 level: 'INTERMEDIATE',
         },
        include: {
            bootcamp: true,
            creator: true,
        },
    });
};

export const getAllIntermediateClasses = async (bootcampId: string) => {
    return await prisma.bootcampClass.findMany({
        where: {
            bootcampId,
            level: 'INTERMEDIATE',
        },
        include: {
            bootcamp: true,
            creator: true,
        },
    });
};


export const updateIntermediateClass = async (id: string, createdBy: string, data: Partial<BootcampClassInput>) => {
    const bootcampClass = await prisma.bootcampClass.findUnique({ where: { id } });

    if (!bootcampClass) {
        throw new Error('Bootcamp Class not found');
    }

    if (bootcampClass.createdBy !== createdBy) {
        throw new Error('Not authorized to update this class');
    }

    return await prisma.bootcampClass.update({
        where: { id,
                 level: 'INTERMEDIATE',
         },
        data,
    });
};

export const deleteIntermediateClass = async (id: string, createdBy: string) => {
    const bootcampClass = await prisma.bootcampClass.findUnique({ where: { id } });

    if (!bootcampClass) {
        throw new Error('Bootcamp Class not found');
    }

    if (bootcampClass.createdBy !== createdBy) {
        throw new Error('Not authorized to delete this class');
    }

    await prisma.bootcampClass.delete({
        where: { id,
                 level: 'INTERMEDIATE',
         },
    });
};

export const getIntermediateClassesByBootcampAndCreator = async (bootcampId: string, createdBy: string) => {
    return await prisma.bootcampClass.findMany({
        where: {
            bootcampId,
            createdBy,
            level: 'INTERMEDIATE', // Ensure you're fetching only BEGINNER classes
        },
        include: {
            bootcamp: true,
            creator: true,
        },
    });
};


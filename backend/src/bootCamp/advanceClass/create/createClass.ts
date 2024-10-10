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

// Functions for Advanced Class
export const createAdvancedClass = async (data: BootcampClassInput) => {
    return await prisma.bootcampClass.create({
        data: {
            ...data,
            level: 'ADVANCED',
        },
    });
};

export const getAdvancedClassById = async (id: string) => {
    return await prisma.bootcampClass.findUnique({
        where: { id,
                 level: 'ADVANCED',
         },
        include: {
            bootcamp: true,
            creator: true,
        },
    });
};

export const getAllAdvancedClasses = async (bootcampId: string) => {
    return await prisma.bootcampClass.findMany({
        where: {
            bootcampId,
            level: 'ADVANCED',
        },
        include: {
            bootcamp: true,
            creator: true,
        },
    });
};

export const updateAdvancedClass = async (id: string, createdBy: string, data: Partial<BootcampClassInput>) => {
    const bootcampClass = await prisma.bootcampClass.findUnique({ where: { id } });

    if (!bootcampClass) {
        throw new Error('Bootcamp Class not found');
    }

    if (bootcampClass.createdBy !== createdBy) {
        throw new Error('Not authorized to update this class');
    }

    return await prisma.bootcampClass.update({
        where: { id,
                 level: 'ADVANCED',
         },
        data,
    });
};

export const deleteAdvancedClass = async (id: string, createdBy: string) => {
    const bootcampClass = await prisma.bootcampClass.findUnique({ where: { id } });

    if (!bootcampClass) {
        throw new Error('Bootcamp Class not found');
    }

    if (bootcampClass.createdBy !== createdBy) {
        throw new Error('Not authorized to delete this class');
    }

    await prisma.bootcampClass.delete({
        where: { id,
                 level: 'ADVANCED',
         },
    });
};

export const getAdvanceClassesByBootcampAndCreator = async (bootcampId: string, createdBy: string) => {
    return await prisma.bootcampClass.findMany({
        where: {
            bootcampId,
            createdBy,
            level: 'BEGINNER', // Ensure you're fetching only BEGINNER classes
        },
        include: {
            bootcamp: true,
            creator: true,
        },
    });
};

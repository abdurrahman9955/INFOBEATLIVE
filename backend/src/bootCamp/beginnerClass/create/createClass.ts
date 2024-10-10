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

// Functions for Beginner Class
export const createBeginnerClass = async (data: BootcampClassInput) => {
    return await prisma.bootcampClass.create({
        data: {
            ...data,
            level: 'BEGINNER',
        },
    });
};

export const getBeginnerClassById = async (id: string) => {
    return await prisma.bootcampClass.findUnique({
        where: { id ,
                 level: 'BEGINNER',
        },
        include: {
            bootcamp: true,
            creator: true,
        },
    });
};

export const getAllBeginnerClasses = async (bootcampId: string) => {
    return await prisma.bootcampClass.findMany({
        where: {
            bootcampId,
            level: 'BEGINNER',
        },
        include: {
            bootcamp: true,
            creator: true,
        },
    });
};

export const updateBeginnerClass = async (id: string, createdBy: string, data: Partial<BootcampClassInput>) => {
    const bootcampClass = await prisma.bootcampClass.findUnique({ where: { id } });

    if (!bootcampClass) {
        throw new Error('Bootcamp Class not found');
    }

    if (bootcampClass.createdBy !== createdBy) {
        throw new Error('Not authorized to update this class');
    }

    return await prisma.bootcampClass.update({
        where: { id,
                 level: 'BEGINNER',
         },
        data,
    });
};

export const deleteBeginnerClass = async (id: string, createdBy: string) => {
    const bootcampClass = await prisma.bootcampClass.findUnique({ where: { id } });

    if (!bootcampClass) {
        throw new Error('Bootcamp Class not found');
    }

    if (bootcampClass.createdBy !== createdBy) {
        throw new Error('Not authorized to delete this class');
    }

    await prisma.bootcampClass.delete({
        where: { id,
                 level: 'BEGINNER',
         },
    });
};

export const getBeginnerClassesByBootcampAndCreator = async (bootcampId: string, createdBy: string) => {
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

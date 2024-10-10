import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface ClassInput {
    name: string;
    purpose: string;
    rules: string;
    description: string;
    icon: string;
    createdBy: string;
}

// Functions for  Class
export const createClass = async (data: ClassInput) => {
    return await prisma.class.create({
        data: {
            ...data,
        },
    });
};

export const getClassById = async (id: string) => {
    return await prisma.class.findUnique({
        where: { id ,
        },
        include: {
            creator: true,
        },
    });
};

export const getAllClasses = async () => {
    return await prisma.class.findMany({
        include: {
            creator: true,
        },
    });
};

export const updateClass = async (id: string, createdBy: string, data: Partial<ClassInput>) => {
    const Class = await prisma.class.findUnique({ where: { id } });

    if (!Class) {
        throw new Error('Bootcamp Class not found');
    }

    if (Class.createdBy !== createdBy) {
        throw new Error('Not authorized to update this class');
    }

    return await prisma.class.update({
        where: { id,
         },
        data,
    });
};

export const deleteClass = async (id: string, createdBy: string) => {
    const Class = await prisma.class.findUnique({ where: { id } });

    if (!Class) {
        throw new Error(' Class not found');
    }

    if (Class.createdBy !== createdBy) {
        throw new Error('Not authorized to delete this class');
    }

    await prisma.Class.delete({
        where: { id,
         },
    });
};

export const getClassByCreator = async ( createdBy: string) => {
    return await prisma.class.findMany({
        where: {
            createdBy,
        },
        include: {
            creator: true,
        },
    });
};

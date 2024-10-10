import { Request, Response, NextFunction } from 'express';
import asyncHandler from './handler';
import {
    createClass,
    getClassById,
    getAllClasses,
    updateClass,
    deleteClass,
    getClassByCreator
} from './createClass';

// Create a new Beginner Class
export const createClasses = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { name, purpose, rules, description, icon } = req.body;
    const createdBy = req.params.id as string; // Get createdBy from the request headers

    if (!createdBy) {
        return res.status(400).json({
            success: false,
            message: 'Bootcamp ID and createdBy ID are required',
        });
    }

    const Class = await createClass({
        name,
        purpose,
        rules,
        description,
        icon,
        createdBy,
    });

    res.status(201).json({
        success: true,
        data: Class,
    });
});


// Get all Beginner Classes
export const getAllClass = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    const beginnerClasses = await getAllClasses();
    res.status(200).json({
        success: true,
        data: beginnerClasses,
    });
});

// Get a Beginner Class by ID
export const getClassesById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const beginnerClass = await getClassById(req.params.id);
    res.status(200).json({
        success: true,
        data: beginnerClass,
    });
});

// Update a Beginner Class

export const updateClasses = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const { name, purpose, rules, description, icon } = req.body;
    const createdBy = req.params.createBy as string; // Extract createdBy from headers

    if (!createdBy) {
        return res.status(400).json({
            success: false,
            message: 'CreatedBy ID is required',
        });
    }

    try {
        const beginnerClass = await updateClass(id, createdBy, {
            name,
            purpose,
            rules,
            description,
            icon,
        });

        res.status(200).json({
            success: true,
            data: beginnerClass,
        });
    } catch (error) {
        res.status(403).json({
            success: false,
            message: 'CreatedBy ID is required',
        });
    }
});

export const deleteClasses = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id as string;
    const createdBy = req.params.createBy as string; // Extract createdBy from headers

    if (!createdBy) {
        return res.status(400).json({
            success: false,
            message: 'CreatedBy ID is required',
        });
    }

    try {
        await deleteClass(id, createdBy);
        res.status(204).json({
            success: true,
            message: 'Beginner Class deleted',
        });
    } catch (error) {
        res.status(403).json({
            success: false,
            message: 'CreatedBy ID is required',
        });
    }
});

export const getClassesByCreator = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const createdBy = req.params.createdBy as string;

    if ( !createdBy) {
        return res.status(400).json({
            success: false,
            message: 'Both bootcampId and createdBy ID are required',
        });
    }

    const beginnerClasses = await getClassByCreator(createdBy);

    res.status(200).json({
        success: true,
        data: beginnerClasses,
    });
});

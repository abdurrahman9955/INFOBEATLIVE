import { Request, Response, NextFunction } from 'express';
import asyncHandler from './handler';
import {
    createAdvancedClass,
    getAdvancedClassById,
    getAllAdvancedClasses,
    updateAdvancedClass,
    deleteAdvancedClass,
    getAdvanceClassesByBootcampAndCreator
} from './createClass';

// Create a new Advanced Class
export const createAdvanced = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  
    const { name, purpose, rules, description, icon } = req.body;
    const bootcampId = req.params.bootcampId as string; // Get bootcampId from the URL params
    const createdBy = req.params.id as string; // Get createdBy from the request headers

    if (!bootcampId || !createdBy) {
        return res.status(400).json({
            success: false,
            message: 'Bootcamp ID and createdBy ID are required',
        });
    }

    const advancedClass = await createAdvancedClass({
        name,
        purpose,
        rules,
        description,
        icon,
        bootcampId,
        createdBy,
    });

    res.status(201).json({
        success: true,
        data: advancedClass,
    });
});

// Get all Advanced Classes
export const getAllAdvanced = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const advancedClasses = await getAllAdvancedClasses(req.params.bootcampId as string);
    res.status(200).json({
        success: true,
        data: advancedClasses,
    });
});

// Get an Advanced Class by ID
export const getAdvancedById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const advancedClass = await getAdvancedClassById(req.params.id);
    res.status(200).json({
        success: true,
        data: advancedClass,
    });
});

export const updateAdvanced = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const { name, purpose, rules, description, icon } = req.body;
    const createdBy = req.params.id as string; // Extract createdBy from headers

    if (!createdBy) {
        return res.status(400).json({
            success: false,
            message: 'CreatedBy ID is required',
        });
    }

    try {
        const beginnerClass = await updateAdvancedClass(id, createdBy, {
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

export const deleteAdvanced = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id as string;
    const createdBy = req.params.id as string; // Extract createdBy from headers

    if (!createdBy) {
        return res.status(400).json({
            success: false,
            message: 'CreatedBy ID is required',
        });
    }

    try {
        await deleteAdvancedClass(id, createdBy);
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


export const getAdvanceClassesByBootcampCreator = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const bootcampId = req.query.bootcampId as string;
    const createdBy = req.query.createdBy as string;

    if (!bootcampId || !createdBy) {
        return res.status(400).json({
            success: false,
            message: 'Both bootcampId and createdBy ID are required',
        });
    }

    const beginnerClasses = await getAdvanceClassesByBootcampAndCreator(bootcampId, createdBy);

    res.status(200).json({
        success: true,
        data: beginnerClasses,
    });
});

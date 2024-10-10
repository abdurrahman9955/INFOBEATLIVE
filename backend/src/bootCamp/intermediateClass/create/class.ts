import { Request, Response, NextFunction } from 'express';
import asyncHandler from './handler';
import {
    createIntermediateClass,
    getIntermediateClassById,
    getAllIntermediateClasses,
    updateIntermediateClass,
    deleteIntermediateClass,
    getIntermediateClassesByBootcampAndCreator
} from './createClass';

// Create a new Intermediate Class
export const createIntermediate = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { name, purpose, rules, description, icon } = req.body;
    const bootcampId = req.params.bootcampId as string; // Get bootcampId from the URL params
    const createdBy = req.params.id as string; // Get createdBy from the request headers

    if (!bootcampId || !createdBy) {
        return res.status(400).json({
            success: false,
            message: 'Bootcamp ID and createdBy ID are required',
        });
    }

    const intermediateClass = await createIntermediateClass({
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
        data: intermediateClass,
    });
});

// Get all Intermediate Classes
export const getAllIntermediate = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const intermediateClasses = await getAllIntermediateClasses(req.params.bootcampId as string);
    res.status(200).json({
        success: true,
        data: intermediateClasses,
    });
});

// Get a Beginner Class by ID
export const getIntermediateById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const beginnerClass = await getIntermediateClassById(req.params.id);
    res.status(200).json({
        success: true,
        data: beginnerClass,
    });
});

export const updateIntermediate = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
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
        const beginnerClass = await updateIntermediateClass(id, createdBy, {
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

export const deleteIntermediate = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id as string;
    const createdBy = req.params.createBy as string; // Extract createdBy from headers

    if (!createdBy) {
        return res.status(400).json({
            success: false,
            message: 'CreatedBy ID is required',
        });
    }

    try {
        await deleteIntermediateClass(id, createdBy);
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

export const getIntermediateClassesByBootcampCreator = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const bootcampId = req.params.bootcampId as string;
    const createdBy = req.params.createdBy as string;

    if (!bootcampId || !createdBy) {
        return res.status(400).json({
            success: false,
            message: 'Both bootcampId and createdBy ID are required',
        });
    }

    const beginnerClasses = await getIntermediateClassesByBootcampAndCreator(bootcampId, createdBy);

    res.status(200).json({
        success: true,
        data: beginnerClasses,
    });
});

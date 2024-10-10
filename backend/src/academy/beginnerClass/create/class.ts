import { Request, Response, NextFunction } from 'express';
import asyncHandler from './handler';
import {
    createBeginnerClass,
    getBeginnerClassById,
    getAllBeginnerClasses,
    updateBeginnerClass,
    deleteBeginnerClass,
    getBeginnerClassesByAcademyAndCreator
} from './createClass';

// Create a new Beginner Class
export const createBeginner = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { name, purpose, rules, description, icon } = req.body;
    const academyId = req.params.academyId as string; // Get academyId from the URL params
    const createdBy = req.params.id as string; // Get createdBy from the request headers

    if (!academyId || !createdBy) {
        return res.status(400).json({
            success: false,
            message: 'Academy ID and createdBy ID are required',
        });
    }

    const beginnerClass = await createBeginnerClass({
        name,
        purpose,
        rules,
        description,
        icon,
        academyId,
        createdBy,
    });

    res.status(201).json({
        success: true,
        data: beginnerClass,
    });
});


// Get all Beginner Classes
export const getAllBeginner = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const academyId = req.params.academyId as string;

    const beginnerClasses = await getAllBeginnerClasses(academyId);
    res.status(200).json({
        success: true,
        data: beginnerClasses,
    });
});

// Get a Beginner Class by ID
export const getBeginnerById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const beginnerClass = await getBeginnerClassById(req.params.id);
    res.status(200).json({
        success: true,
        data: beginnerClass,
    });
});

// Update a Beginner Class

export const updateBeginner = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
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
        const beginnerClass = await updateBeginnerClass(id, createdBy, {
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

export const deleteBeginner = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id as string;
    const createdBy = req.params.createBy as string; // Extract createdBy from headers

    if (!createdBy) {
        return res.status(400).json({
            success: false,
            message: 'CreatedBy ID is required',
        });
    }

    try {
        await deleteBeginnerClass(id, createdBy);
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

export const getBeginnerClassesByAcademyCreator = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const academyId = req.params.academyId as string;
    const createdBy = req.params.createdBy as string;

    if (!academyId || !createdBy) {
        return res.status(400).json({
            success: false,
            message: 'Both bootcampId and createdBy ID are required',
        });
    }

    const beginnerClasses = await getBeginnerClassesByAcademyAndCreator(academyId, createdBy);

    res.status(200).json({
        success: true,
        data: beginnerClasses,
    });
});

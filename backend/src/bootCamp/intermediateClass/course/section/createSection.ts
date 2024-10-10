import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { processAndUploadThumbnail } from "./thumbnail";

const prisma = new PrismaClient();

// Create a new section
export const createSection = async (req: Request, res: Response) => {
  const { title, description, category, tags} = req.body;
  const { courseId, instructorId } = req.params
  const thumbnail = req.file;

  if (!title || !description || !category || !tags || !courseId || !thumbnail) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Process and upload thumbnail
    await processAndUploadThumbnail(thumbnail.path, title);

    // Save section to the database
    const section = await prisma.bootcampCourseSection.create({
      data: {
        title,
        instructorId,
        description,
        category,
        tags,
        courseId,
        level:'INTERMEDIATE',
        thumbnailUrl: `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/thumbnails/${title}_thumbnail.jpg`,
      },
    });

    res.status(201).json(section);
  } catch (error) {
    console.error("Error creating section:", error);
    res.status(500).json({ error: "Failed to create section" });
  }
};

// Get all sections
export const getAllSections = async (req: Request, res: Response) => {
  try {
    const courses = await prisma.bootcampCourseSection.findMany({
      where: { 
        level:'INTERMEDIATE',
       }, 
      include: {
        sections: true,
      },
    });
    res.status(200).json(courses);
  } catch (error) {
    console.error("Error fetching section:", error);
    res.status(500).json({ error: "Failed to fetch section" });
  }
};

// Get a single section by ID
export const getSectionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { courseId, instructorId } = req.params

  try {
    const course = await prisma.bootcampCourseSection.findUnique({
      where: { id,
               courseId,
               instructorId,
               level:'INTERMEDIATE',
       },
      include: {
        sections: true,
      },
    });

    if (!course) {
      return res.status(404).json({ error: "Section not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    console.error("Error fetching section:", error);
    res.status(500).json({ error: "Failed to fetch section" });
  }
};

// Update a section
export const updateSection = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { courseId, instructorId } = req.params
  const { title, description, category, tags } = req.body;
  const thumbnail = req.file;

  try {
    let thumbnailUrl = undefined;
    if (thumbnail) {
      await processAndUploadThumbnail(thumbnail.path, title);
      thumbnailUrl = `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/thumbnails/${title}_thumbnail.jpg`;
    }

    const updatedCourse = await prisma.bootcampCourseSection.update({
      where: { id,
               courseId,
               instructorId,
               level:'INTERMEDIATE',
       },
      data: {
        title,
        description,
        category,
        tags,
        thumbnailUrl: thumbnailUrl,
      },
    });

    res.status(200).json(updatedCourse);
  } catch (error) {
    console.error("Error updating section:", error);
    res.status(500).json({ error: "Failed to update section" });
  }
};

// Delete a section
export const deleteSection = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { courseId, instructorId } = req.params

  try {
    await prisma.bootcampCourseSection.delete({
      where: { id,
       courseId,
       instructorId,
       level:'INTERMEDIATE',
       },
    });

    res.status(200).json({ message: "Section deleted successfully" });
  } catch (error) {
    console.error("Error deleting section:", error);
    res.status(500).json({ error: "Failed to delete section" });
  }
};

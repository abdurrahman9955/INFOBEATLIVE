import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { processAndUploadThumbnail } from "./thumbnail";

const prisma = new PrismaClient();

// Create a new course
export const createCourse = async (req: Request, res: Response) => {
  const { title, description, category, tags} = req.body;
  const { classId, instructorId } = req.params
  const thumbnail = req.file;

  if (!title || !description || !category || !tags || !instructorId || !classId || !thumbnail) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Process and upload thumbnail
    await processAndUploadThumbnail(thumbnail.path, title);

    // Save course to the database
    const course = await prisma.course.create({
      data: {
        title,
        description,
        category,
        tags,
        instructorId,
        classId,
        thumbnailUrl: `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/thumbnails/${title}_thumbnail.jpg`,
      },
    });

    res.status(201).json(course);
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ error: "Failed to create course" });
  }
};

// Get all courses
export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await prisma.course.findMany({
      include: {
        sections: true,
      },
    });
    res.status(200).json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Failed to fetch courses" });
  }
};

// Get a single course by ID
export const getCourseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {  instructorId } = req.params

  try {
    const course = await prisma.course.findUnique({
      where: { id,
               instructorId,
       },
      include: {
        sections: true,
      },
    });

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    console.error("Error fetching course:", error);
    res.status(500).json({ error: "Failed to fetch course" });
  }
};

// Update a course
export const updateCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { instructorId } = req.params;
  const { title, description, category, tags } = req.body;
  const thumbnail = req.file;

  try {
    let thumbnailUrl = undefined;
    if (thumbnail) {
      await processAndUploadThumbnail(thumbnail.path, title);
      thumbnailUrl = `https://${process.env.AWS_BUCKET}.s3.amazonaws.com/thumbnails/${title}_thumbnail.jpg`;
    }

    const updatedCourse = await prisma.course.update({
      where: { id,
        instructorId,
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
    console.error("Error updating course:", error);
    res.status(500).json({ error: "Failed to update course" });
  }
};

// Delete a course
export const deleteCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { classId, instructorId } = req.params

  try {
    await prisma.course.delete({
      where: { id,
       instructorId,
       },
    });

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ error: "Failed to delete course" });
  }
};

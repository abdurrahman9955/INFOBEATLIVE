import { Router } from "express";
import upload from "./multer";
import {
  createSection,
  getAllSections,
  getSectionById,
  updateSection,
  deleteSection
} from "./createSection";

const classCourseSection = Router();

// Route to create a course
classCourseSection.post("/course_section", upload.single("thumbnail"), createSection);

// Route to get all courses
classCourseSection.get("/course_section", getAllSections);

// Route to get a single course by ID
classCourseSection.get("/course_Section/:id", getSectionById);

// Route to update a course
classCourseSection.put("/course_section/:id", upload.single("thumbnail"), updateSection);

// Route to delete a course
classCourseSection.delete("/course_section/:id", deleteSection);

export default classCourseSection;

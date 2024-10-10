import { Router } from "express";
import upload from "./multer";
import {
  createSection,
  getAllSections,
  getSectionById,
  updateSection,
  deleteSection
} from "./createSection";

const academyIntermediateClassCourseSection = Router();

// Route to create a course
academyIntermediateClassCourseSection.post("/", upload.single("thumbnail"), createSection);

// Route to get all courses
academyIntermediateClassCourseSection.get("/", getAllSections);

// Route to get a single course by ID
academyIntermediateClassCourseSection.get("/:id", getSectionById);

// Route to update a course
academyIntermediateClassCourseSection.put("/:id", upload.single("thumbnail"), updateSection);

// Route to delete a course
academyIntermediateClassCourseSection.delete("/:id", deleteSection);

export default academyIntermediateClassCourseSection;

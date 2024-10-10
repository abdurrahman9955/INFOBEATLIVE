import { Router } from "express";
import upload from "./multer";
import {
  createSection,
  getAllSections,
  getSectionById,
  updateSection,
  deleteSection
} from "./createSection";

const academyAdvanceClassCourseSection = Router();

// Route to create a course
academyAdvanceClassCourseSection.post("/", upload.single("thumbnail"), createSection);

// Route to get all courses
academyAdvanceClassCourseSection.get("/", getAllSections);

// Route to get a single course by ID
academyAdvanceClassCourseSection.get("/:id", getSectionById);

// Route to update a course
academyAdvanceClassCourseSection.put("/:id", upload.single("thumbnail"), updateSection);

// Route to delete a course
academyAdvanceClassCourseSection.delete("/:id", deleteSection);

export default academyAdvanceClassCourseSection;

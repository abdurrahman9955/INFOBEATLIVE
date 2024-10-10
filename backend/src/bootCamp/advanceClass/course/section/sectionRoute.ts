import { Router } from "express";
import upload from "./multer";
import {
  createSection,
  getAllSections,
  getSectionById,
  updateSection,
  deleteSection
} from "./createSection";

const bootcampAdvanceClassCourseSection = Router();

// Route to create a course
bootcampAdvanceClassCourseSection.post("/", upload.single("thumbnail"), createSection);

// Route to get all courses
bootcampAdvanceClassCourseSection.get("/", getAllSections);

// Route to get a single course by ID
bootcampAdvanceClassCourseSection.get("/:id", getSectionById);

// Route to update a course
bootcampAdvanceClassCourseSection.put("/:id", upload.single("thumbnail"), updateSection);

// Route to delete a course
bootcampAdvanceClassCourseSection.delete("/:id", deleteSection);

export default bootcampAdvanceClassCourseSection;

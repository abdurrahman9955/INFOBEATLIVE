import { Router } from "express";
import upload from "./multer";
import {
  createSection,
  getAllSections,
  getSectionById,
  updateSection,
  deleteSection
} from "./createSection";

const bootcampIntermediateClassCourseSection = Router();

// Route to create a course
bootcampIntermediateClassCourseSection.post("/", upload.single("thumbnail"), createSection);

// Route to get all courses
bootcampIntermediateClassCourseSection.get("/", getAllSections);

// Route to get a single course by ID
bootcampIntermediateClassCourseSection.get("/:id", getSectionById);

// Route to update a course
bootcampIntermediateClassCourseSection.put("/:id", upload.single("thumbnail"), updateSection);

// Route to delete a course
bootcampIntermediateClassCourseSection.delete("/:id", deleteSection);

export default bootcampIntermediateClassCourseSection;

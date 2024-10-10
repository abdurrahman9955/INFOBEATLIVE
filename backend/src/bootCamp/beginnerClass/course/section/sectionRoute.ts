import { Router } from "express";
import upload from "./multer";
import {
  createSection,
  getAllSections,
  getSectionById,
  updateSection,
  deleteSection
} from "./createSection";

const bootcampBeginnerClassCourseSection = Router();

// Route to create a course
bootcampBeginnerClassCourseSection.post("/", upload.single("thumbnail"), createSection);

// Route to get all courses
bootcampBeginnerClassCourseSection.get("/", getAllSections);

// Route to get a single course by ID
bootcampBeginnerClassCourseSection.get("/:id", getSectionById);

// Route to update a course
bootcampBeginnerClassCourseSection.put("/:id", upload.single("thumbnail"), updateSection);

// Route to delete a course
bootcampBeginnerClassCourseSection.delete("/:id", deleteSection);

export default bootcampBeginnerClassCourseSection;

import { Router } from "express";
import upload from "./multer";
import {
  createSection,
  getAllSections,
  getSectionById,
  updateSection,
  deleteSection
} from "./createSection";

const academyBeginnerClassCourseSection = Router();

// Route to create a course
academyBeginnerClassCourseSection.post("/", upload.single("thumbnail"), createSection);

// Route to get all courses
academyBeginnerClassCourseSection.get("/", getAllSections);

// Route to get a single course by ID
academyBeginnerClassCourseSection.get("/:id", getSectionById);

// Route to update a course
academyBeginnerClassCourseSection.put("/:id", upload.single("thumbnail"), updateSection);

// Route to delete a course
academyBeginnerClassCourseSection.delete("/:id", deleteSection);

export default academyBeginnerClassCourseSection;

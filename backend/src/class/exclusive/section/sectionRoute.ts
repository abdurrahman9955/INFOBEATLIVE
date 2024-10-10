import { Router } from "express";
import upload from "./multer";
import {
  createSection,
  getAllSections,
  getSectionById,
  updateSection,
  deleteSection
} from "./createSection";

const classExclusiveSection = Router();

// Route to create a course
classExclusiveSection.post("/exclusive_section/", upload.single("thumbnail"), createSection);

// Route to get all courses
classExclusiveSection.get("/exclusive_section/", getAllSections);

// Route to get a single course by ID
classExclusiveSection.get("/exclusive_section/:id", getSectionById);

// Route to update a course
classExclusiveSection.put("/exclusive_section/:id", upload.single("thumbnail"), updateSection);

// Route to delete a course
classExclusiveSection.delete("/exclusive_section/:id", deleteSection);

export default classExclusiveSection;

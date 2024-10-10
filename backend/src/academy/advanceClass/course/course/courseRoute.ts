import { Router } from "express";
import upload from "./multer";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} from "./createCourse";

const academyAdvanceClassCourseCreate = Router();

// Route to create a course
academyAdvanceClassCourseCreate.post("/", upload.single("thumbnail"), createCourse);

// Route to get all courses
academyAdvanceClassCourseCreate.get("/", getAllCourses);

// Route to get a single course by ID
academyAdvanceClassCourseCreate.get("/:id", getCourseById);

// Route to update a course
academyAdvanceClassCourseCreate.put("/:id", upload.single("thumbnail"), updateCourse);

// Route to delete a course
academyAdvanceClassCourseCreate.delete("/:id", deleteCourse);

export default academyAdvanceClassCourseCreate;

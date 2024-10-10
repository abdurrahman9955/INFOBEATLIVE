import { Router } from "express";
import upload from "./multer";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} from "./createCourse";

const bootcampAdvanceClassCourseCreate = Router();

// Route to create a course
bootcampAdvanceClassCourseCreate.post("/", upload.single("thumbnail"), createCourse);

// Route to get all courses
bootcampAdvanceClassCourseCreate.get("/", getAllCourses);

// Route to get a single course by ID
bootcampAdvanceClassCourseCreate.get("/:id", getCourseById);

// Route to update a course
bootcampAdvanceClassCourseCreate.put("/:id", upload.single("thumbnail"), updateCourse);

// Route to delete a course
bootcampAdvanceClassCourseCreate.delete("/:id", deleteCourse);

export default bootcampAdvanceClassCourseCreate;

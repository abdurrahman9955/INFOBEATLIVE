import { Router } from "express";
import upload from "./multer";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} from "./createCourse";

const academyIntermediateClassCourseCreate = Router();

// Route to create a course
academyIntermediateClassCourseCreate.post("/", upload.single("thumbnail"), createCourse);

// Route to get all courses
academyIntermediateClassCourseCreate.get("/", getAllCourses);

// Route to get a single course by ID
academyIntermediateClassCourseCreate.get("/:id", getCourseById);

// Route to update a course
academyIntermediateClassCourseCreate.put("/:id", upload.single("thumbnail"), updateCourse);

// Route to delete a course
academyIntermediateClassCourseCreate.delete("/:id", deleteCourse);

export default academyIntermediateClassCourseCreate;

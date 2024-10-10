import { Router } from "express";
import upload from "./multer";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} from "./createCourse";

const createBootcampIntermediateClassCourse = Router();

// Route to create a course
createBootcampIntermediateClassCourse.post("/", upload.single("thumbnail"), createCourse);

// Route to get all courses
createBootcampIntermediateClassCourse.get("/", getAllCourses);

// Route to get a single course by ID
createBootcampIntermediateClassCourse.get("/:id", getCourseById);

// Route to update a course
createBootcampIntermediateClassCourse.put("/:id", upload.single("thumbnail"), updateCourse);

// Route to delete a course
createBootcampIntermediateClassCourse.delete("/:id", deleteCourse);

export default createBootcampIntermediateClassCourse;

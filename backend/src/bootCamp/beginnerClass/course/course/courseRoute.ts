import { Router } from "express";
import upload from "./multer";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} from "./createCourse";

const createBootcampBeginnerClassCourse = Router();

// Route to create a course
createBootcampBeginnerClassCourse.post("/", upload.single("thumbnail"), createCourse);

// Route to get all courses
createBootcampBeginnerClassCourse.get("/", getAllCourses);

// Route to get a single course by ID
createBootcampBeginnerClassCourse.get("/:id", getCourseById);

// Route to update a course
createBootcampBeginnerClassCourse.put("/:id", upload.single("thumbnail"), updateCourse);

// Route to delete a course
createBootcampBeginnerClassCourse.delete("/:id", deleteCourse);

export default createBootcampBeginnerClassCourse;

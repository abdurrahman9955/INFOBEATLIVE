import { Router } from "express";
import upload from "./multer";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} from "./createCourse";

const academyBeginnerClassCourseCreate = Router();

// Route to create a course
academyBeginnerClassCourseCreate.post("/", upload.single("thumbnail"), createCourse);

// Route to get all courses
academyBeginnerClassCourseCreate.get("/", getAllCourses);

// Route to get a single course by ID
academyBeginnerClassCourseCreate.get("/:id", getCourseById);

// Route to update a course
academyBeginnerClassCourseCreate.put("/:id", upload.single("thumbnail"), updateCourse);

// Route to delete a course
academyBeginnerClassCourseCreate.delete("/:id", deleteCourse);

export default academyBeginnerClassCourseCreate;

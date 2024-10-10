import { Router } from "express";
import upload from "./multer";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} from "./createCourse";

const classCourseRouter = Router();

// Route to create a course
classCourseRouter.post("/course", upload.single("thumbnail"), createCourse);

// Route to get all courses
classCourseRouter.get("/course", getAllCourses);

// Route to get a single course by ID
classCourseRouter.get("/course/:id", getCourseById);

// Route to update a course
classCourseRouter.put("/course/:id", upload.single("thumbnail"), updateCourse);

// Route to delete a course
classCourseRouter.delete("/course/:id", deleteCourse);

export default classCourseRouter;

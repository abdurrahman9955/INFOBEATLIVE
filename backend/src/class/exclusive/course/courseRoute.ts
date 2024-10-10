import { Router } from "express";
import upload from "./multer";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} from "./createCourse";

const classExclusiveCourseRouter = Router();

// Route to create a course
classExclusiveCourseRouter.post("/exclusive", upload.single("thumbnail"), createCourse);

// Route to get all courses
classExclusiveCourseRouter.get("/exclusive", getAllCourses);

// Route to get a single course by ID
classExclusiveCourseRouter.get("/exclusive/:id", getCourseById);

// Route to update a course
classExclusiveCourseRouter.put("exclusive/:id", upload.single("thumbnail"), updateCourse);

// Route to delete a course
classExclusiveCourseRouter.delete("/exclusive/:id", deleteCourse);

export default classExclusiveCourseRouter;

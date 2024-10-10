// src/routes/bootcampClassTextPostRoutes.ts
import express from "express";
import { createPost, getAllPosts, getPosts, updatePost, deletePost } from "./post";
import { upload } from "./multer";
import { authenticate } from "../../account/authenticate/authenticate";


const classPostRouter = express.Router();

classPostRouter.post("/:classId", authenticate, upload.array("images", 10), createPost);
classPostRouter.get("/:classId/:userId", authenticate, getPosts);
classPostRouter.get("/:classId/:userId", authenticate, getAllPosts);
classPostRouter.put("/:id", authenticate, upload.array("images", 10), updatePost);
classPostRouter.delete("/:id", authenticate, deletePost);

export default classPostRouter;

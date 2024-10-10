// src/routes/bootcampClassTextPostRoutes.ts
import express from "express";
import { createPost, getAllPosts, getPosts, updatePost, deletePost } from "./post";
import { upload } from "./multer";
import { authenticate } from "../../account/authenticate/authenticate";


const academyPostRouter = express.Router();

academyPostRouter.post("/:classId", authenticate, upload.array("images", 10), createPost);
academyPostRouter.get("/:classId/:userId", authenticate, getPosts);
academyPostRouter.get("/:classId/:userId", authenticate, getAllPosts);
academyPostRouter.put("/:id", authenticate, upload.array("images", 10), updatePost);
academyPostRouter.delete("/:id", authenticate, deletePost);

export default academyPostRouter;

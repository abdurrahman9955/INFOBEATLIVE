// src/routes/bootcampClassTextPostRoutes.ts
import express from "express";
import { createPost, getAllPosts, getPosts, updatePost, deletePost } from "./post";
import { upload } from "./multer";
import { authenticate } from "../../account/authenticate/authenticate";


const bootcampPostRouter = express.Router();

bootcampPostRouter.post("/:classId", authenticate, upload.array("images", 10), createPost);
bootcampPostRouter.get("/:classId/:userId", authenticate, getPosts);
bootcampPostRouter.get("/:classId/:userId", authenticate, getAllPosts);
bootcampPostRouter.put("/:id", authenticate, upload.array("images", 10), updatePost);
bootcampPostRouter.delete("/:id", authenticate, deletePost);

export default bootcampPostRouter;

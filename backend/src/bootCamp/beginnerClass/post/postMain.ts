// src/routes/bootcampClassTextPostRoutes.ts
import express from "express";
import { createPost, getAllPosts, getPosts, updatePost, deletePost } from "./post";
import { upload } from "./multer";
import { authenticate } from "../../../account/authenticate/authenticate";


const bootcampBeginnerClassPost = express.Router();

bootcampBeginnerClassPost.post("/:classId", authenticate, upload.array("images", 10), createPost);
bootcampBeginnerClassPost.get("/:classId/:userId", authenticate, getPosts);
bootcampBeginnerClassPost.get("/:classId/:userId", authenticate, getAllPosts);
bootcampBeginnerClassPost.put("/:id", authenticate, upload.array("images", 10), updatePost);
bootcampBeginnerClassPost.delete("/:id", authenticate, deletePost);

export default bootcampBeginnerClassPost;

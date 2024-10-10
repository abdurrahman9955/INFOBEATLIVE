// src/routes/bootcampClassTextPostRoutes.ts
import express from "express";
import { createPost, getAllPosts, getPosts, updatePost, deletePost } from "./post";
import { upload } from "./multer";
import { authenticate } from "../../../account/authenticate/authenticate";

const academyBeginnerClassPost = express.Router();

academyBeginnerClassPost.post("/:classId", authenticate, upload.array("images", 10), createPost);
academyBeginnerClassPost.get("/:classId/:userId", authenticate, getPosts);
academyBeginnerClassPost.get("/:classId/:userId", authenticate, getAllPosts);
academyBeginnerClassPost.put("/:id", authenticate, upload.array("images", 10), updatePost);
academyBeginnerClassPost.delete("/:id", authenticate, deletePost);

export default academyBeginnerClassPost;

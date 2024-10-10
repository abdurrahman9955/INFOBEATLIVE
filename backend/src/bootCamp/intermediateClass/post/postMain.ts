// src/routes/bootcampClassTextPostRoutes.ts
import express from "express";
import { createPost, getAllPosts, getPosts, updatePost, deletePost } from "./post";
import { upload } from "./multer";
import { authenticate } from "../../../account/authenticate/authenticate";


const bootcampIntermediateClassPost = express.Router();

bootcampIntermediateClassPost.post("/:classId", authenticate, upload.array("images", 10), createPost);
bootcampIntermediateClassPost.get("/:classId/:userId", authenticate, getPosts);
bootcampIntermediateClassPost.get("/:classId/:userId", authenticate, getAllPosts);
bootcampIntermediateClassPost.put("/:id", authenticate, upload.array("images", 10), updatePost);
bootcampIntermediateClassPost.delete("/:id", authenticate, deletePost);

export default bootcampIntermediateClassPost;

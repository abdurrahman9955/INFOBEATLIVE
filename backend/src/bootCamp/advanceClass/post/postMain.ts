// src/routes/bootcampClassTextPostRoutes.ts
import express from "express";
import { createPost, getAllPosts, getPosts, updatePost, deletePost } from "./post";
import { upload } from "./multer";
import { authenticate } from "../../../account/authenticate/authenticate";


const bootcampAdvanceClassPost = express.Router();

bootcampAdvanceClassPost.post("/:classId", authenticate, upload.array("images", 10), createPost);
bootcampAdvanceClassPost.get("/:classId/:userId", authenticate, getPosts);
bootcampAdvanceClassPost.get("/:classId/:userId", authenticate, getAllPosts);
bootcampAdvanceClassPost.put("/:id", authenticate, upload.array("images", 10), updatePost);
bootcampAdvanceClassPost.delete("/:id", authenticate, deletePost);

export default bootcampAdvanceClassPost;

// src/routes/bootcampClassTextPostRoutes.ts
import express from "express";
import { createPost, getAllPosts, getPosts, updatePost, deletePost } from "./post";
import { upload } from "./multer";
import { authenticate } from "../../../account/authenticate/authenticate";


const academyAdvanceClassPost = express.Router();

academyAdvanceClassPost.post("/:classId", authenticate, upload.array("images", 10), createPost);
academyAdvanceClassPost.get("/:classId/:userId", authenticate, getPosts);
academyAdvanceClassPost.get("/:classId/:userId", authenticate, getAllPosts);
academyAdvanceClassPost.put("/:id", authenticate, upload.array("images", 10), updatePost);
academyAdvanceClassPost.delete("/:id", authenticate, deletePost);

export default academyAdvanceClassPost;

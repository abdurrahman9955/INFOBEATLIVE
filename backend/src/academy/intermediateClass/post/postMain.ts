// src/routes/bootcampClassTextPostRoutes.ts
import express from "express";
import { createPost, getAllPosts, getPosts, updatePost, deletePost } from "./post";
import { upload } from "./multer";
import { authenticate } from "../../../account/authenticate/authenticate";


const academyIntermediateClassPost = express.Router();

academyIntermediateClassPost.post("/:classId", authenticate, upload.array("images", 10), createPost);
academyIntermediateClassPost.get("/:classId/:userId", authenticate, getPosts);
academyIntermediateClassPost.get("/:classId/:userId", authenticate, getAllPosts);
academyIntermediateClassPost.put("/:id", authenticate, upload.array("images", 10), updatePost);
academyIntermediateClassPost.delete("/:id", authenticate, deletePost);

export default academyIntermediateClassPost;

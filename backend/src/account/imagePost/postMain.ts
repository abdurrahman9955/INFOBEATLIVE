// src/routes/bootcampClassTextPostRoutes.ts
import express from "express";
import { createPost, getAllPosts, getPosts, updatePost, deletePost } from "./post";
import { upload } from "./multer";
import { authenticate } from "../../account/authenticate/authenticate";


const imagePost = express.Router();

imagePost.post("/:classId", authenticate, upload.array("images", 10), createPost);
imagePost.get("/:classId/:userId", authenticate, getPosts);
imagePost.get("/:classId/:userId", authenticate, getAllPosts);
imagePost.put("/:id", authenticate, upload.array("images", 10), updatePost);
imagePost.delete("/:id", authenticate, deletePost);

export default imagePost;

// src/controllers/bootcampClassTextPostController.ts
import { Request, Response } from "express";
import {
  createBootcampClassTextPost,
  getBootcampClassTextPosts,
  updateBootcampClassTextPost,
  deleteBootcampClassTextPost,
  getAllBootcampClassTextPosts,
} from "./createPost";

export const createPost = async (req: Request, res: Response) => {
  try {
    const { classId } = req.params;
    const { content } = req.body;
    const userId = req.params.id; // Assuming user ID is available in the request (after authentication middleware)

    const post = await createBootcampClassTextPost(classId, userId, content, req.files as Express.Multer.File[]);
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
    try {
      const { classId } = req.params;
      const posts = await getAllBootcampClassTextPosts(classId);
      res.status(200).json({ success: true, data: posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  };

export const getPosts = async (req: Request, res: Response) => {
  try {
    const { classId, userId } = req.params;
    const posts = await getBootcampClassTextPosts(classId, userId);
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const { userId } = req.params;

    const post = await updateBootcampClassTextPost(id, userId, {
      content,
      files: req.files as Express.Multer.File[],
    });
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId } = req.params;
    await deleteBootcampClassTextPost(id, userId);
    res.status(204).json({ success: true, message: "Post deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

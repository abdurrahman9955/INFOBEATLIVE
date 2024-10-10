// src/controllers/bootcampClassTextPostController.ts
import { Request, Response } from "express";
import {
  createTextPost,
  getTextPosts,
  updateTextPost,
  deleteTextPost,
  getAllTextPosts,
} from "./createPost";

export const createPost = async (req: Request, res: Response) => {
  try {
    const { description, title } = req.body;
    const userId = req.params.id; // Assuming user ID is available in the request (after authentication middleware)

    const post = await createTextPost( userId, title, description, req.files as Express.Multer.File[]);
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
    try {
      
      const posts = await getAllTextPosts();
      res.status(200).json({ success: true, data: posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  };

export const getPosts = async (req: Request, res: Response) => {
  try {
    const {  userId } = req.params;
    const posts = await getTextPosts( userId);
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description  } = req.body;
    const { userId } = req.params;

    const post = await updateTextPost(id, userId, {
      title,
      description,
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
    await deleteTextPost(id, userId);
    res.status(204).json({ success: true, message: "Post deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

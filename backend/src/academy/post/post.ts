// src/controllers/bootcampClassTextPostController.ts
import { Request, Response } from "express";
import {
  createAcademyTextPost,
  getAcademyTextPosts,
  updateAcademyTextPost,
  deleteAcademyTextPost,
  getAllAcademyTextPosts,
} from "./createPost";

export const createPost = async (req: Request, res: Response) => {
  try {
    const { academyId } = req.params;
    const { content, title } = req.body;
    const userId = req.params.id; // Assuming user ID is available in the request (after authentication middleware)

    const post = await createAcademyTextPost(academyId, userId, title, content, req.files as Express.Multer.File[]);
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
    try {
      const { academyId } = req.params;
      const posts = await getAllAcademyTextPosts(academyId);
      res.status(200).json({ success: true, data: posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  };

export const getPosts = async (req: Request, res: Response) => {
  try {
    const { academyId, userId } = req.params;
    const posts = await getAcademyTextPosts(academyId, userId);
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

    const post = await updateAcademyTextPost(id, userId, {
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
    await deleteAcademyTextPost(id, userId);
    res.status(204).json({ success: true, message: "Post deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

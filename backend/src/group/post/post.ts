// src/controllers/textPost.controller.ts
import { Request, Response } from 'express';
import TextPostService from './createPost';
import upload from './multer';

class TextPostController {
  // Create a text post with images
  async createTextPost(req: Request, res: Response): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const groupId = req.params.groupId;
      const content = req.body.content;
      const images = req.files as Express.MulterS3.File[]; // Type assertion

      const post = await TextPostService.createTextPost(userId, groupId, content, images);
      res.status(201).json(post);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: 'Failed to create post', error: error.message });
      } else {
        res.status(500).json({ message: 'Failed to create post', error: 'An unknown error occurred' });
      }
    }
  }

  // Get a text post by ID
  async getTextPostById(req: Request, res: Response): Promise<void> {
    try {
      const postId = req.params.postId;
      const post = await TextPostService.getTextPostById(postId);
      if (!post) {
        res.status(404).json({ message: 'Post not found' });
      } else {
        res.status(200).json(post);
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: 'Failed to get post', error: error.message });
      } else {
        res.status(500).json({ message: 'Failed to get post', error: 'An unknown error occurred' });
      }
    }
  }

  // Update a text post
  async updateTextPost(req: Request, res: Response): Promise<void> {
    try {
      const postId = req.params.postId;
      const content = req.body.content;
      const images = req.files as Express.MulterS3.File[]; // Type assertion

      const updatedPost = await TextPostService.updateTextPost(postId, content, images);
      res.status(200).json(updatedPost);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: 'Failed to update post', error: error.message });
      } else {
        res.status(500).json({ message: 'Failed to update post', error: 'An unknown error occurred' });
      }
    }
  }

  // Delete a text post
  async deleteTextPost(req: Request, res: Response): Promise<void> {
    try {
      const postId = req.params.postId;
      await TextPostService.deleteTextPost(postId);
      res.status(204).end();
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: 'Failed to delete post', error: error.message });
      } else {
        res.status(500).json({ message: 'Failed to delete post', error: 'An unknown error occurred' });
      }
    }
  }

  // Get all text posts for a group
  async getAllTextPosts(req: Request, res: Response): Promise<void> {
    try {
      const groupId = req.params.groupId;
      const posts = await TextPostService.getAllTextPosts(groupId);
      res.status(200).json(posts);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: 'Failed to get posts', error: error.message });
      } else {
        res.status(500).json({ message: 'Failed to get posts', error: 'An unknown error occurred' });
      }
    }
  }
}

export default new TextPostController();

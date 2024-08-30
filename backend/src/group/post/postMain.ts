// src/routes/textPost.routes.ts
import { Router } from 'express';
import TextPostController from './post';
import upload from './multer';
import { authenticate } from '../createGroup/authMiddleware';

const router = Router();

// Create a text post with images
router.post('/groups/:groupId/posts',authenticate, upload.array('images', 5), TextPostController.createTextPost);

// Get a specific text post
router.get('/posts/:postId',authenticate, TextPostController.getTextPostById);

// Update a specific text post
router.put('/posts/:postId',authenticate, upload.array('images', 5), TextPostController.updateTextPost);

// Delete a specific text post
router.delete('/posts/:postId',authenticate, TextPostController.deleteTextPost);

// Get all text posts for a specific group
router.get('/groups/:groupId/posts',authenticate, TextPostController.getAllTextPosts);

export default router;

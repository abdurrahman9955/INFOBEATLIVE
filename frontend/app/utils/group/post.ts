// src/utils/textPostUtils.ts
import axios from 'axios';
import FormData from 'form-data'; // Import form-data package if not using built-in FormData
import handleError from './errorHandler'; // Adjust import path as necessary

// Define base URL for the API
const API_BASE_URL = 'http://localhost:3500'; // Adjust the base URL as necessary

// Create a text post with images
export const createTextPost = async (
  groupId: string,
  content: string,
  images: Buffer[],
  token: string
): Promise<any | undefined> => {
  try {
    const form = new FormData();
    form.append('content', content);
    images.forEach((image, index) => {
      form.append('images', image, { filename: `image${index}`, contentType: 'image/jpeg' }); // Adjust contentType as needed
    });

    const response = await axios.post(`${API_BASE_URL}/groups/${groupId}/posts`, form, {
      headers: {
        ...form.getHeaders(),
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    handleError(error);
    return undefined;
  }
};

// Get a text post by ID
export const getTextPostById = async (
  postId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts/${postId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    handleError(error);
    return undefined;
  }
};

// Update a text post
export const updateTextPost = async (
  postId: string,
  content?: string,
  images?: Buffer[],
  token?: string
): Promise<any | undefined> => {
  try {
    const form = new FormData();
    if (content) form.append('content', content);
    if (images) {
      images.forEach((image, index) => {
        form.append('images', image, { filename: `image${index}`, contentType: 'image/jpeg' });
      });
    }

    const response = await axios.put(`${API_BASE_URL}/posts/${postId}`, form, {
      headers: {
        ...form.getHeaders(),
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    handleError(error);
    return undefined;
  }
};

// Delete a text post
export const deleteTextPost = async (
  postId: string,
  token: string
): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/posts/${postId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (error) {
    handleError(error);
  }
};

// Get all text posts for a group
export const getAllTextPosts = async (
  groupId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/groups/${groupId}/posts`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    handleError(error);
    return undefined;
  }
};

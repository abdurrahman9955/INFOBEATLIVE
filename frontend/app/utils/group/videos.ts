// src/utils/normalVideosUtils.ts
import axios from 'axios';
import FormData from 'form-data'; // Import form-data package if not using built-in FormData
import handleError from './errorHandler'; // Adjust import path as necessary

// Define base URL for the API
const API_BASE_URL = 'http://localhost:3500'; // Adjust the base URL as necessary

// Upload a normal video
export const uploadNormalVideo = async (
  groupId: string,
  userId: string,
  title: string,
  description: string,
  videoFile: Buffer,
  thumbnailFile?: Buffer,
  token?: string
): Promise<any | undefined> => {
  try {
    const form = new FormData();
    form.append('title', title);
    form.append('description', description);
    form.append('video', videoFile, { filename: 'video.mp4', contentType: 'video/mp4' });
    if (thumbnailFile) {
      form.append('thumbnail', thumbnailFile, { filename: 'thumbnail.jpg', contentType: 'image/jpeg' });
    }

    const response = await axios.post(`${API_BASE_URL}/group/${groupId}/upload`, form, {
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

// Get all media for a group
export const getMediaForGroup = async (
  groupId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/media/group/${groupId}`, {
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

// Get media for a specific group and user
export const getMediaForGroupAndUser = async (
  groupId: string,
  userId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/media/group/${groupId}/user/${userId}`, {
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

// Get a specific media item by ID
export const getMediaById = async (
  mediaId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/media/${mediaId}`, {
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

// Delete a specific media item by ID
export const deleteMediaById = async (
  mediaId: string,
  token: string
): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/media/${mediaId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (error) {
    handleError(error);
  }
};

// Update a specific media item by ID
export const updateMediaById = async (
  mediaId: string,
  title?: string,
  description?: string,
  token?: string
): Promise<any | undefined> => {
  try {
    const form = new FormData();
    if (title) form.append('title', title);
    if (description) form.append('description', description);

    const response = await axios.put(`${API_BASE_URL}/media/${mediaId}`, form, {
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

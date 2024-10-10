import axios from 'axios';
import FormData from 'form-data';
import handleError from '../errorHandler'; // Adjust the import path as necessary

// Define base URL for the API
const API_BASE_URL = 'http://localhost:3500'; // Adjust the base URL as necessary

// Upload a video
export const uploadExclusiveVideo = async (
  sectionId: string,
  instructorId: string,
  title: string,
  videoFile: Buffer,
  thumbnailFile?: Buffer
): Promise<any | undefined> => {
  try {
    const form = new FormData();
    form.append('title', title);
    form.append('video', videoFile, { filename: 'video.mp4', contentType: 'video/mp4' });
    if (thumbnailFile) {
      form.append('thumbnail', thumbnailFile, { filename: 'thumbnail.jpg', contentType: 'image/jpeg' });
    }

    const response = await axios.post(`${API_BASE_URL}/upload_exclusive`, form, {
      headers: {
        ...form.getHeaders()
      }
    });
    return response.data;
  } catch (error) {
    handleError(error);
    return undefined;
  }
};

// Get all media for a specific section
export const getMediaForExclusiveSection = async (
  sectionId: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/media/exclusive/${sectionId}`);
    return response.data;
  } catch (error) {
    handleError(error);
    return undefined;
  }
};

// Get media for a specific section and instructor
export const getMediaForExclusiveSectionAndInstructor = async (
  sectionId: string,
  instructorId: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/media_exclusive/course/${sectionId}/user/${instructorId}`);
    return response.data;
  } catch (error) {
    handleError(error);
    return undefined;
  }
};

// Get a specific media item by ID
export const getExclusiveMediaById = async (
  mediaId: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/media_exclusive/${mediaId}`);
    return response.data;
  } catch (error) {
    handleError(error);
    return undefined;
  }
};

// Delete a specific media item by ID
export const deleteExclusiveMediaById = async (
  mediaId: string
): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/media_exclusive/${mediaId}`);
  } catch (error) {
    handleError(error);
  }
};

// Update a specific media item by ID
export const updateExclusiveMediaById = async (
  mediaId: string,
  title?: string
): Promise<any | undefined> => {
  try {
    const form = new FormData();
    if (title) form.append('title', title);

    const response = await axios.put(`${API_BASE_URL}/media_section/${mediaId}`, form, {
      headers: {
        ...form.getHeaders()
      }
    });
    return response.data;
  } catch (error) {
    handleError(error);
    return undefined;
  }
};

import axios from 'axios';
import FormData from 'form-data'; // Import form-data package if not using built-in FormData
import handleError from '../errorHandler'; // Adjust import path as necessary

// Define base URL for the API
const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as necessary

// Send a video message
export const sendVideoMessage = async (
  groupId: string,
  userId: string,
  videoBuffer: Buffer,
  token: string
): Promise<any | undefined> => {
  try {
    const form = new FormData();
    form.append('file', videoBuffer, { filename: 'video.mp4', contentType: 'video/mp4' });

    const response = await axios.post(`${API_BASE_URL}/sendVideoMessage/${groupId}/${userId}`, form, {
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

// Get messages for a group
export const getMessages = async (
  groupId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getMessages/${groupId}`, {
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

// Update a message
export const updateMessage = async (
  messageId: string,
  videoBuffer?: Buffer,
  content?: string,
  token?: string
): Promise<any | undefined> => {
  try {
    const form = new FormData();
    if (videoBuffer) {
      form.append('file', videoBuffer, { filename: 'video.mp4', contentType: 'video/mp4' });
    }
    if (content) {
      form.append('content', content);
    }

    const response = await axios.put(`${API_BASE_URL}/updateMessage/${messageId}`, form, {
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

// Delete a message
export const deleteMessage = async (
  messageId: string,
  token: string
): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/deleteMessage/${messageId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (error) {
    handleError(error);
  }
};

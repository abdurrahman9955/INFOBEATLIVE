import axios from 'axios';
import FormData from 'form-data'; // For handling form data
import { Readable } from 'stream'; // For handling file buffers
import handleError from '../errorHandler'; // Adjust import path as necessary

// Define base URL for the API
const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as necessary

// Send a recording message
export const sendRecordingMessage = async (
  groupId: string,
  userId: string,
  recordingBuffer: Buffer,
  token: string
): Promise<any | undefined> => {
  try {
    const form = new FormData();
    form.append('file', recordingBuffer, { filename: 'recording.mp4', contentType: 'video/mp4' });

    const response = await axios.post(`${API_BASE_URL}/sendRecordingMessage/${groupId}/${userId}`, form, {
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

// Get all recording messages for a group
export const getRecordingMessages = async (
  groupId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getRecordingMessages/${groupId}`, {
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

// Update a recording message
export const updateRecordingMessage = async (
  messageId: string,
  recordingBuffer: Buffer,
  token: string
): Promise<any | undefined> => {
  try {
    const form = new FormData();
    form.append('file', recordingBuffer, { filename: 'updated_recording.mp4', contentType: 'video/mp4' });

    const response = await axios.put(`${API_BASE_URL}/updateRecordingMessage/${messageId}`, form, {
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

// Delete a recording message
export const deleteRecordingMessage = async (
  messageId: string,
  token: string
): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/deleteRecordingMessage/${messageId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (error) {
    handleError(error);
  }
};

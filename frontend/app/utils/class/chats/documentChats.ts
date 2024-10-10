import axios from 'axios';
import FormData from 'form-data'; // For handling form data
import { Readable } from 'stream'; // For handling file buffers
import handleError from '../errorHandler'; // Adjust import path as necessary

// Define base URL for the API
const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as necessary

// Upload a document
export const uploadDocument = async (
  groupId: string,
  userId: string,
  documentBuffer: Buffer,
  documentTitle?: string,
  token?: string
): Promise<any | undefined> => {
  try {
    const form = new FormData();
    form.append('file', documentBuffer, { filename: 'document.pdf', contentType: 'application/pdf' }); // Adjust filename and contentType as needed
    if (documentTitle) {
      form.append('documentTitle', documentTitle);
    }

    const response = await axios.post(`${API_BASE_URL}/uploadDocument/${groupId}/${userId}`, form, {
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

// Get all messages for a group
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

// Update a document
export const updateDocument = async (
  messageId: string,
  documentBuffer?: Buffer,
  documentTitle?: string,
  token?: string
): Promise<any | undefined> => {
  try {
    const form = new FormData();
    if (documentBuffer) {
      form.append('file', documentBuffer, { filename: 'document.pdf', contentType: 'application/pdf' }); // Adjust filename and contentType as needed
    }
    if (documentTitle) {
      form.append('documentTitle', documentTitle);
    }

    const response = await axios.put(`${API_BASE_URL}/updateDocument/${messageId}`, form, {
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

// Delete a document
export const deleteDocument = async (
  messageId: string,
  token: string
): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/deleteDocument/${messageId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (error) {
    handleError(error);
  }
};

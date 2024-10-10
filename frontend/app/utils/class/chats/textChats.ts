import axios from 'axios';
import handleError from '../errorHandler'; // Adjust import path as necessary

// Define base URL for the API
const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as necessary

// Create a message
export const createMessage = async (
  groupId: string,
  userId: string,
  content: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/message/${groupId}/${userId}`, { content }, {
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

// Get all messages for a group
export const getMessages = async (
  groupId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/messages/${groupId}`, {
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
  content: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.put(`${API_BASE_URL}/message/${messageId}`, { content }, {
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

// Delete a message
export const deleteMessage = async (
  messageId: string,
  token: string
): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/message/${messageId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (error) {
    handleError(error);
  }
};

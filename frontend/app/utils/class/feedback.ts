import axios from 'axios';
import handleError from './errorHandler'; // Adjust import path as necessary

// Define base URL for the API
const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as necessary

// Get all feedbacks for a class
export const getAllFeedbacks = async (
  classId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/feedback?classId=${classId}`, {
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

// Get a specific feedback by ID
export const getFeedbackById = async (
  id: string,
  userId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/feedback/${id}?userId=${userId}`, {
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

// Create new feedback
export const createFeedback = async (
  feedbackData: any,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/feedback`, feedbackData, {
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

// Update an existing feedback
export const updateFeedback = async (
  id: string,
  userId: string,
  feedbackData: any,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.put(`${API_BASE_URL}/feedback/${id}?userId=${userId}`, feedbackData, {
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

// Delete feedback
export const deleteFeedback = async (
  id: string,
  userId: string,
  token: string
): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/feedback/${id}?userId=${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (error) {
    handleError(error);
  }
};

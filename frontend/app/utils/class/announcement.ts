import axios from 'axios';
import handleError from './errorHandler'; // Adjust import path as necessary

// Define base URL for the API
const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as necessary

// Get all announcements for a class
export const getAllAnnouncements = async (
  classId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/announcement?classId=${classId}`, {
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

// Get a specific announcement by ID
export const getAnnouncementById = async (
  id: string,
  userId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/announcement/${id}?userId=${userId}`, {
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

// Create a new announcement
export const createAnnouncement = async (
  announcementData: any,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/announcement`, announcementData, {
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

// Update an existing announcement
export const updateAnnouncement = async (
  id: string,
  userId: string,
  announcementData: any,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.put(`${API_BASE_URL}/announcement/${id}?userId=${userId}`, announcementData, {
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

// Delete an announcement
export const deleteAnnouncement = async (
  id: string,
  userId: string,
  token: string
): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/announcement/${id}?userId=${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (error) {
    handleError(error);
  }
};

// Utility function for auto-deleting expired announcements
export const autoDeleteExpiredAnnouncements = async (
  token: string
): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/announcement/auto-delete`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (error) {
    handleError(error);
  }
};

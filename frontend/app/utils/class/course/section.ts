import axios from 'axios';
import handleError from '../errorHandler'; // Adjust import path as necessary

// Define base URL for the API
const API_BASE_URL = 'http://localhost:3500'; // Adjust the base URL as necessary

// Create a new section
export const createSection = async (
  sectionData: FormData,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/course_section`, sectionData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data;
  } catch (error) {
    handleError(error);
    return undefined;
  }
};

// Get all sections
export const getAllSections = async (
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/course_section`, {
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

// Get a specific section by ID
export const getSectionById = async (
  id: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/course_section/${id}`, {
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

// Update an existing section
export const updateSection = async (
  id: string,
  sectionData: FormData,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.put(`${API_BASE_URL}/course_section/${id}`, sectionData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data;
  } catch (error) {
    handleError(error);
    return undefined;
  }
};

// Delete a section
export const deleteSection = async (
  id: string,
  token: string
): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/course_section/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (error) {
    handleError(error);
  }
};

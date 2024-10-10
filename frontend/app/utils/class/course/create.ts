import axios from 'axios';
import handleError from '../errorHandler'; // Adjust import path as necessary

// Define base URL for the API
const API_BASE_URL = 'http://localhost:3500'; // Adjust the base URL as necessary

// Create a new course
export const createCourse = async (
  courseData: FormData,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/course`, courseData, {
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

// Get all courses
export const getAllCourses = async (
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/course`, {
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

// Get a specific course by ID
export const getCourseById = async (
  id: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/course/${id}`, {
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

// Update an existing course
export const updateCourse = async (
  id: string,
  courseData: FormData,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.put(`${API_BASE_URL}/course/${id}`, courseData, {
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

// Delete a course
export const deleteCourse = async (
  id: string,
  token: string
): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/course/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  } catch (error) {
    handleError(error);
  }
};

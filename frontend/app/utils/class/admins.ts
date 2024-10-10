import axios, { AxiosResponse } from 'axios';
import handleError from './errorHandler'; // Assuming handleError is another utility file for error handling

// Define base URL for the API
const API_BASE_URL = 'http://localhost:3500'; // Adjust the base URL as necessary

// Utility function to add an admin to a group
export const addAdmin = async (groupId: string, userId: string): Promise<AxiosResponse<any> | undefined> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/groups/${groupId}/admins/${userId}`);
    return response.data;
  } catch (error) {
    handleError(error); // Call the custom error handler
    return undefined; // Explicitly return undefined in case of error
  }
};

// Utility function to remove an admin from a group
export const removeAdmin = async (groupId: string, userId: string): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/groups/${groupId}/admins/${userId}`);
  } catch (error) {
    handleError(error); // Call the custom error handler
    return; // Explicitly return in case of error
  }
};

// Utility function to get all admins of a group
export const getAdmins = async (groupId: string): Promise<AxiosResponse<any> | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/groups/${groupId}/admins`);
    return response.data;
  } catch (error) {
    handleError(error); // Call the custom error handler
    return undefined; // Explicitly return undefined in case of error
  }
};

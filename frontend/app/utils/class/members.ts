import axios, { AxiosResponse } from 'axios';
import handleError from './errorHandler'; // Assuming handleError is another utility file for error handling

// Define base URL for the API
const API_BASE_URL = 'http://localhost:3500'; // Adjust the base URL as necessary

// Add a member to a group
export const addMember = async (groupId: string, userId: string): Promise<AxiosResponse<any> | undefined> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/groups/${groupId}/members/${userId}`);
    return response.data;
  } catch (error) {
    handleError(error); // Call the custom error handler
    return undefined;  // Ensure undefined is returned in case of an error
  }
};

// Remove a member from a group
export const removeMember = async (groupId: string, userId: string): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/groups/${groupId}/members/${userId}`);
  } catch (error) {
    handleError(error); // Call the custom error handler
  }
};

// Get all members of a group
export const getMembers = async (groupId: string): Promise<AxiosResponse<any> | undefined> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/groups/${groupId}/members`);
    return response.data;
  } catch (error) {
    handleError(error); // Call the custom error handler
    return undefined;  // Ensure undefined is returned in case of an error
  }
};

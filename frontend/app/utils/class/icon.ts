import axios, { AxiosResponse } from 'axios';
import FormData from 'form-data'; // Import the form-data package
import handleError from './errorHandler'; // Adjust the import path as necessary
import { Buffer } from 'buffer'; // Import buffer if needed

// Define base URL for the API
const API_BASE_URL = 'http://localhost:3500'; // Adjust the base URL as necessary

// Create a group icon
export const createGroupIcon = async (
    name: string,
    description: string,
    iconFile: Buffer,
    mimeType: string
): Promise<any | undefined> => {
    try {
        const form = new FormData();
        form.append('icon', iconFile, { filename: 'icon', contentType: mimeType });
        form.append('name', name);
        form.append('description', description);

        const response = await axios.post(`${API_BASE_URL}/groups/icon`, form, {
            headers: {
                ...form.getHeaders(), // Include the appropriate headers for form-data
            }
        });
        return response.data;
    } catch (error) {
        handleError(error); // Call the custom error handler
        return undefined; // Ensure undefined is returned in case of an error
    }
};

// Update a group icon
export const updateGroupIcon = async (
    groupId: string,
    iconFile: Buffer,
    mimeType: string
): Promise<any | undefined> => {
    try {
        const form = new FormData();
        form.append('icon', iconFile, { filename: 'icon', contentType: mimeType });

        const response = await axios.put(`${API_BASE_URL}/groups/${groupId}/icon`, form, {
            headers: {
                ...form.getHeaders(), // Include the appropriate headers for form-data
            }
        });
        return response.data;
    } catch (error) {
        handleError(error); // Call the custom error handler
        return undefined; // Ensure undefined is returned in case of an error
    }
};

// Delete a group icon
export const deleteGroupIcon = async (groupId: string): Promise<void> => {
    try {
        await axios.delete(`${API_BASE_URL}/groups/${groupId}/icon`);
    } catch (error) {
        handleError(error); // Call the custom error handler
    }
};

// Get a group icon
export const getGroupIcon = async (groupId: string): Promise<any | undefined> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/groups/${groupId}/icon`);
        return response.data;
    } catch (error) {
        handleError(error); // Call the custom error handler
        return undefined; // Ensure undefined is returned in case of an error
    }
};

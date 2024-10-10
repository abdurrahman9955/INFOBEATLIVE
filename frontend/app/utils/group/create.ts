import axios, { AxiosError } from 'axios';

const API_URL = 'http://localhost:3500'; // Adjust this based on your actual backend API URL

export const createGroup = async (groupData: any, token: string) => {
  try {
    const response = await axios.post(`${API_URL}/groups`, groupData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getGroupById = async (id: string, token: string) => {
  try {
    const response = await axios.get(`${API_URL}/groups/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateGroup = async (id: string, groupData: any, token: string) => {
  try {
    const response = await axios.put(`${API_URL}/groups/${id}`, groupData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteGroup = async (id: string, token: string) => {
  try {
    await axios.delete(`${API_URL}/groups/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    handleError(error);
  }
};

export const getAllGroups = async (token: string) => {
  try {
    const response = await axios.get(`${API_URL}/groups`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error: unknown): never => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Server responded with a status code that falls out of the range of 2xx
        console.error('Error response:', error.response.data);
        throw new Error(error.response.data.message || 'API call failed');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
        throw new Error('No response from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message);
        throw new Error(error.message || 'Error occurred while making the request');
      }
    } else {
      // Handle non-Axios errors (this could be helpful for debugging)
      console.error('Unexpected error:', error);
      throw new Error('An unexpected error occurred');
    }
  };

// src/utils/videoCallUtils.ts
import axios from 'axios';
import handleError from './errorHandler'; // Adjust import path as necessary

// Define base URL for the API
const API_BASE_URL = 'http://localhost:3500'; // Adjust the base URL as necessary

// Start a video call
export const startVideoCall = async (
  userId: string,
  groupId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/video-calls/start/${userId}/${groupId}`, {}, {
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

// End a video call
export const endVideoCall = async (
  callId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/video-calls/end/${callId}`, {}, {
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

// Join a video call
export const joinVideoCall = async (
  callId: string,
  userId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/video-calls/join/${callId}/${userId}`, {}, {
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

// Leave a video call
export const leaveVideoCall = async (
  callId: string,
  userId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/video-calls/leave/${callId}/${userId}`, {}, {
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

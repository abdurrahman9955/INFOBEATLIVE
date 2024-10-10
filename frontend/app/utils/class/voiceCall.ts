// src/utils/voiceCallUtils.ts
import axios from 'axios';
import handleError from './errorHandler'; // Adjust import path as necessary

// Define base URL for the API
const API_BASE_URL = 'http://localhost:3500'; // Adjust the base URL as necessary

// Start a voice call
export const startVoiceCall = async (
  userId: string,
  groupId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/voice-calls/start/${userId}/${groupId}`, {}, {
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

// End a voice call
export const endVoiceCall = async (
  callId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/voice-calls/end/${callId}`, {}, {
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

// Join a voice call
export const joinVoiceCall = async (
  callId: string,
  userId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/voice-calls/join/${callId}/${userId}`, {}, {
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

// Leave a voice call
export const leaveVoiceCall = async (
  callId: string,
  userId: string,
  token: string
): Promise<any | undefined> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/voice-calls/leave/${callId}/${userId}`, {}, {
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

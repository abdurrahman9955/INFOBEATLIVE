import axios, { AxiosError } from 'axios';

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

  export default handleError;
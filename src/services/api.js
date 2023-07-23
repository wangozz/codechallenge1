// api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8001'; // Replace with your JSON DB server URL

export const getTransactions = () => {
  return axios.get(`${API_BASE_URL}/transactions`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

// Add other API functions for creating, updating, and deleting transactions if needed

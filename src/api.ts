import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchMeters = async (currentPage = 1, limit = 20) => {
  const offset = (currentPage - 1) * limit;
  try {
    return await axios.get(`${API_BASE_URL}/meters/`, {
      params: { limit, offset },
    });
  } catch (error) {
    console.error('Error fetching meters:', error);
    throw error;
  }
};

export const fetchArea = async (areaId: string) => {
  try {
    return await axios.get(`${API_BASE_URL}/areas/`, {
      params: { id__in: areaId },
    });
  } catch (error) {
    console.error('Error fetching areas:', error);
    throw error;
  }
};

export const deleteMeter = async (meterId: string) => {
  try {
    await axios.delete(`${API_BASE_URL}/meters/${meterId}/`);
  } catch (error) {
    console.error('Error deleting meter:', error);
    throw error;
  }
};

// filepath: frontend/src/apiService.js
import axios from 'axios';

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.football-data.org/v2/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'X-Auth-Token': API_KEY },
});

export const getLiveScores = async () => {
  try {
    const response = await api.get('matches?status=LIVE');
    return response.data;
  } catch (error) {
    console.error('Error fetching live scores:', error);
    throw error;
  }
};
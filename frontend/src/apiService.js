import axios from 'axios';

const API_KEY = process.env.API_KEY; // Ensure you have this in your .env file
const BASE_URL = 'https://v3.football.api-sports.io/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'x-apisports-key': API_KEY },
});

export const getLiveScores = async () => {
  try {
    const response = await api.get('fixtures?live=all');
    return response.data.response;
  } catch (error) {
    console.error('Error fetching live scores:', error);
    throw error;
  }
};
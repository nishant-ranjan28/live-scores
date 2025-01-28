import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY; // Ensure you have this in your .env file
const BASE_URL = 'https://v3.football.api-sports.io/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'x-apisports-key': API_KEY },
});

export const getMatches = async () => {
  try {
    const liveResponse = await api.get('fixtures?live=all');
    const completedResponse = await api.get('fixtures?status=FT'); // Fetch completed matches
    console.log('Live Matches:', liveResponse.data);
    console.log('Completed Matches:', completedResponse.data);
    return {
      live: liveResponse.data.response,
      completed: completedResponse.data.response,
    };
  } catch (error) {
    console.error('Error fetching matches:', error);
    throw error;
  }
};
// filepath: frontend/src/App.js
import React, { useEffect, useState } from 'react';
import { getLiveScores } from './apiService';
import './index.css';

const App = () => {
  const [liveScores, setLiveScores] = useState([]);

  useEffect(() => {
    const fetchLiveScores = async () => {
      try {
        const data = await getLiveScores();
        setLiveScores(data.matches);
      } catch (error) {
        console.error('Error fetching live scores:', error);
      }
    };

    fetchLiveScores();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Live Football Scores</h1>
      {liveScores.length > 0 ? (
        <ul>
          {liveScores.map((match) => (
            <li key={match.id} className="mb-2 p-2 border rounded">
              <div className="flex justify-between">
                <span>{match.homeTeam.name}</span>
                <span>{match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}</span>
                <span>{match.awayTeam.name}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No live matches at the moment.</p>
      )}
    </div>
  );
};

export default App;
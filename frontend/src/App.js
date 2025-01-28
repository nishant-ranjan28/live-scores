import React, { useEffect, useState } from 'react';
import { getLiveScores } from './apiService';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  const [liveScores, setLiveScores] = useState([]);

  useEffect(() => {
    const fetchLiveScores = async () => {
      try {
        const data = await getLiveScores();
        setLiveScores(data);
      } catch (error) {
        console.error('Error fetching live scores:', error);
      }
    };

    fetchLiveScores();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Live Football Scores</h1>
      {liveScores.length > 0 ? (
        <ul className="list-group">
          {liveScores.map((match) => (
            <li key={match.fixture.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{match.teams.home.name}</span>
              <span>{match.goals.home} - {match.goals.away}</span>
              <span>{match.teams.away.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">No live matches at the moment.</p>
      )}
    </div>
  );
};

export default App;
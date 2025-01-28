import React, { useEffect, useState } from 'react';
import { getMatches } from './apiService';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  const [liveMatches, setLiveMatches] = useState([]);
  const [completedMatches, setCompletedMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await getMatches();
        setLiveMatches(data.live || []);
        setCompletedMatches(data.completed || []);
      } catch (error) {
        console.error('Error fetching matches:', error);
        setLiveMatches([]);
        setCompletedMatches([]);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Football Scores</h1>
      <h2 className="text-center mb-4">Live Matches</h2>
      {Array.isArray(liveMatches) && liveMatches.length > 0 ? (
        <ul className="list-group mb-4">
          {liveMatches.map((match) => (
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

      <h2 className="text-center mb-4">Completed Matches</h2>
      {Array.isArray(completedMatches) && completedMatches.length > 0 ? (
        <ul className="list-group">
          {completedMatches.map((match) => (
            <li key={match.fixture.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{match.teams.home.name}</span>
              <span>{match.goals.home} - {match.goals.away}</span>
              <span>{match.teams.away.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">No completed matches at the moment.</p>
      )}
    </div>
  );
};

export default App;
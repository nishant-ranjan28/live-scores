import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Backend URL

function App() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Fetch initial scores
    axios.get('http://localhost:5000/api/scores')
      .then((response) => setScores(response.data))
      .catch((error) => console.error(error));

    // Listen for real-time updates
    socket.on('scoreUpdate', (updatedScores) => {
      setScores(updatedScores);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <h1>Live Scores</h1>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            {score.team1} vs {score.team2}: {score.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
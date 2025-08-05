import React, { useState } from 'react';

// ListofPlayers Component
const ListofPlayers = () => {
  // Declare array with 11 players using ES6 features
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 92 },
    { name: "KL Rahul", score: 45 },
    { name: "Hardik Pandya", score: 78 },
    { name: "MS Dhoni", score: 55 },
    { name: "Ravindra Jadeja", score: 35 },
    { name: "Jasprit Bumrah", score: 15 },
    { name: "Mohammed Shami", score: 25 },
    { name: "Yuzvendra Chahal", score: 12 },
    { name: "Bhuvneshwar Kumar", score: 28 },
    { name: "Rishabh Pant", score: 88 }
  ];

  // Using map() method of ES6 to display all players
  const playersList = players.map((player, index) => (
    <div key={index} style={{ margin: '5px 0', padding: '5px', border: '1px solid #ddd' }}>
      <strong>{player.name}</strong> - Score: {player.score}
    </div>
  ));

  // Filter players with scores below 70 using arrow functions of ES6
  const lowScorePlayers = players
    .filter(player => player.score < 70)
    .map((player, index) => (
      <div key={index} style={{ margin: '5px 0', padding: '5px', border: '1px solid #ffcccc', backgroundColor: '#ffe6e6' }}>
        <strong>{player.name}</strong> - Score: {player.score}
      </div>
    ));

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
        List of Players
      </h2>
      
      <h3 style={{ color: '#27ae60', marginTop: '20px' }}>All Players (using map()):</h3>
      <div style={{ marginBottom: '20px' }}>
        {playersList}
      </div>

      <h3 style={{ color: '#e74c3c', marginTop: '20px' }}>
        Players with scores below 70 (using arrow functions and filter()):
      </h3>
      <div>
        {lowScorePlayers}
      </div>
    </div>
  );
};

// IndianPlayers Component
const IndianPlayers = () => {
  // Array of players for destructuring
  const teamPlayers = [
    "Virat Kohli", "Rohit Sharma", "KL Rahul", "Hardik Pandya", 
    "MS Dhoni", "Ravindra Jadeja", "Jasprit Bumrah", "Mohammed Shami"
  ];

  // Destructuring features of ES6 - separating odd and even positioned players
  const oddTeamPlayers = [];
  const evenTeamPlayers = [];

  // Using destructuring and spread operator
  teamPlayers.forEach((player, index) => {
    if ((index + 1) % 2 === 1) {
      oddTeamPlayers.push(player);
    } else {
      evenTeamPlayers.push(player);
    }
  });

  // Alternative destructuring approach
  const [first, second, third, fourth, fifth, sixth, seventh, eighth] = teamPlayers;
  const oddPositioned = [first, third, fifth, seventh];
  const evenPositioned = [second, fourth, sixth, eighth];

  // Two arrays to merge using ES6 merge feature
  const T20players = ["Virat Kohli", "Rohit Sharma", "KL Rahul", "Hardik Pandya"];
  const RanjiTrophyPlayers = ["Ajinkya Rahane", "Cheteshwar Pujara", "Hanuma Vihari", "Mayank Agarwal"];

  // Merge arrays using spread operator (ES6 feature)
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #9b59b6', paddingBottom: '10px' }}>
        Indian Players
      </h2>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ color: '#e67e22' }}>Odd Team Players (using destructuring):</h3>
          <div style={{ backgroundColor: '#fef9e7', padding: '10px', borderRadius: '5px' }}>
            {oddPositioned.map((player, index) => (
              <div key={index} style={{ margin: '5px 0', padding: '5px', border: '1px solid #f39c12' }}>
                {index + 1}. {player}
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <h3 style={{ color: '#16a085' }}>Even Team Players (using destructuring):</h3>
          <div style={{ backgroundColor: '#e8f8f5', padding: '10px', borderRadius: '5px' }}>
            {evenPositioned.filter(player => player).map((player, index) => (
              <div key={index} style={{ margin: '5px 0', padding: '5px', border: '1px solid #1abc9c' }}>
                {index + 1}. {player}
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3 style={{ color: '#8e44ad', marginTop: '20px' }}>
        Merged T20 and Ranji Trophy Players (using spread operator):
      </h3>
      <div style={{ backgroundColor: '#f4ecf7', padding: '15px', borderRadius: '5px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {mergedPlayers.map((player, index) => (
            <span 
              key={index} 
              style={{ 
                padding: '8px 12px', 
                backgroundColor: '#9b59b6', 
                color: 'white', 
                borderRadius: '20px',
                fontSize: '14px'
              }}
            >
              {player}
            </span>
          ))}
        </div>
        <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#666' }}>
          Total merged players: {mergedPlayers.length}
        </p>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div style={{ 
      // minHeight: '100v/h', 
      backgroundColor: '#ecf0f1', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <header style={{ 
        backgroundColor: '#34495e', 
        color: 'white', 
        padding: '20px', 
        textAlign: 'center' 
      }}>
        <h1>Cricket App - ES6 Features Demo</h1>
        <button 
          onClick={() => setFlag(!flag)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '10px'
          }}
        >
          Switch to {flag ? 'Indian Players' : 'List of Players'} (Flag: {flag.toString()})
        </button>
      </header>

      <main style={{ maxWidth: '12000x', margin: '0 auto', backgroundColor: 'white', minHeight: 'calc(100vh - 120px)' }}>
        {/* Simple if-else using flag variable */}
        {flag ? <ListofPlayers /> : <IndianPlayers />}
      </main>
    </div>
  );
};

export default App;
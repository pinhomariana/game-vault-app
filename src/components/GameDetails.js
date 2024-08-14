import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GameDetails.css';

export default function GameDetails() {
  const { id } = useParams(); 
  const [game, setGame] = useState(null);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;

  useEffect(() => {
    async function fetchGameDetails() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch game details');
        }
        const data = await response.json();
        setGame(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchGameDetails();
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className='game-details'>
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} />
      <p className='game-description'>{game.description_raw}</p>
      <p><strong>Platforms:</strong> {game.platforms.map(platform => platform.platform.name).join(', ')}</p>
      <p><strong>Rating:</strong> {game.rating}</p>
      {game.esrb_rating && <p><strong>ESRB Rating:</strong> {game.esrb_rating.name}</p>}
      {game.website && (
        <p>
          <strong>Official Website:</strong> 
          <a href={game.website} target="_blank" rel="noopener noreferrer">{game.website}</a>
        </p>
      )}
    </div>
  );
}

import React from 'react';
import { useState, useEffect } from 'react';
import './GameCatalogStyles.css';
import GameCard from './GameCard';

export default function GameCatalog() {

    const [games, setGames] = useState([]); 

    const API_KEY = "3908ab5ff590472c850f65f4d13c5761"
    const API_URL = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`

    async function getData() {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) {
            throw new Error('Failed to fetch weather data');
          }
          const data = await response.json();
          setGames(data.results); // Update state with fetched data
            console.log(data.results);
          
        } catch (err) {
          console.log(err.message); 
        }
      }

      useEffect(() => {
        getData(); 
      }, []);

  return (
    <div className='catalog-container'>
        <h1>Game Catalog</h1>
        <div className="game-list">
            {games.map ((game) => <GameCard key={game.id} game={game}/>)}
        </div>
    </div>
  )
}

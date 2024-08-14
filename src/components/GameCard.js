import React from 'react';
import "./GameCardStyles.css";
import { Link } from 'react-router-dom';

export default function GameCard({ game }) {
  return (
    <div className='card-container'>
        <img src={game.background_image}></img>
        <h2>{game.name}</h2>
        <div className='platforms'>
          <span className='rating'>{game.rating}</span>
      </div>
      <button className='card-button'>
        <Link to={`/games/${game.id}`}>See more</Link>
      </button>
    </div>
    
  )
}

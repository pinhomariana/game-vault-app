import React from 'react';
import "./GameCardStyles.css";


export default function GameCard({ game }) {
  return (
    <div className='card-container'>
        <img src={game.background_image}></img>
        <h2>{game.name}</h2>
        <div className='platforms'>
        <span className='rating'>{game.rating}</span>

      </div>
    </div>
    
  )
}

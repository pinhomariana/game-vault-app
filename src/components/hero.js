import React from 'react';
import './HeroStyles.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
      <div className='hero container'>
        <section className='hero-text'>
          <h1>Welcome to Game Vault</h1>
          <p>Track your game library with ease and efficiency.</p>
          <button className='card-button'>
            <Link to="/game-catalog">See more</Link>
          </button>
        </section>
      </div>
    </>
  )
}

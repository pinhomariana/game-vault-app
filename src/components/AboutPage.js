import React from 'react';
import './AboutPageStyle.css';
import spiderMan from "./spiderman.jpeg";

export default function AboutPage() {
  return (
    <div className='about-page'>
        <h1>About Game Vault</h1>
        <div className='about-container'>
            <p>Welcome to Game Vault, the ultimate app designed to help gamers efficiently track 
                and manage their game collections. Our platform offers an intuitive interface to 
                organize your games, track your progress, and discover new titles that fit your interests.</p>
            <img className="about-image" src={spiderMan} alt="Spider man"/>
        </div>
    </div>
    
  )
}

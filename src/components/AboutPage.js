import React from 'react';
import './AboutPageStyle.css';
import spiderMan from "./spiderman.jpg";

export default function AboutPage() {
  return (
    <div className='about-page'>
        <h1>About Game Vault</h1>
        <div className='about-container'>
            <p>Welcome to Game Vault, an app designed to help you explore and discover game details. 
              Whether you're browsing for new titles or diving into the specifics of your favorite games, 
              our platform makes it easy to find and explore the games that interest you.</p>
            <img className="about-image" src={spiderMan} alt="Spider man"/>
        </div>
    </div>
    
  )
}

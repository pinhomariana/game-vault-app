import React, { useState, useEffect } from 'react';
import './GameCatalogStyles.css';
import GameCard from './GameCard';

export default function GameCatalog() {

    const [games, setGames] = useState([]);
    const [page, setPage] = useState(1); // Track the current page

    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7&page=${page}`

    async function getData() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Failed to fetch game data');
            }
            const data = await response.json();
            setGames((prevGames) => [...prevGames, ...data.results]); 
            console.log(data.results);

        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getData();
    }, [page]); 

    const loadMoreGames = () => {
        setPage(prevPage => prevPage + 1); 
    };

    return (
        <div className='catalog-container'>
            <h1>Game Catalog</h1>
            <div className="game-list">
                {games.map((game) => <GameCard key={game.id} game={game} />)}
            </div>
            <button onClick={loadMoreGames}>Load More</button>
        </div>
    );
}

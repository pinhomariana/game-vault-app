import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import GameCatalog from './components/GameCatalog';
import GameDetails from './components/GameDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/game-vault-app" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/game-catalog" element={<GameCatalog />} />
        <Route path="/games/:id" element={<GameDetails />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBarStyles.css';
import logo from './logo.png'; 

class NavBar extends Component {

  state={clicked: false};

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
  return (
    <>
      <nav>
       <img src={logo} alt="Game Vault Logo" className="navbar__logo" />
        <div>
          <ul id="nav-bar" className={this.state.clicked ? "#nav-bar active" : "#nav-bar"}>
              <li><Link to="/game-vault-app" className="active">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/game-catalog">See Games</Link></li>
          </ul>
        </div>
        <div className='mobile' onClick={this.handleClick}>
          <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  )
}
}
export default NavBar;
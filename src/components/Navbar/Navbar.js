import React from 'react';
import { Link } from 'react-router-dom';
import mic from '../assets/microphone.png';
import setting from '../assets/setting.png';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <div className="Logo">
      <Link to="/">
        <h1>
          COIN-CENTRAL
        </h1>
      </Link>
    </div>
    <div className="icons">
      <img src={mic} alt="mic" className="mic" />
      <img src={setting} alt="setting" className="setting" />
    </div>
  </div>
);

export default Navbar;

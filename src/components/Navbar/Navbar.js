import React from 'react';
import mic from '../assets/microphone.png';
import setting from '../assets/setting.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="Logo">
        <Link to="/">
          <h1>
            COIN<span>CENTRAL</span>
          </h1>
        </Link>
      </div>
      <div className="icons">
        <img src={mic} alt="mic" className="mic" />
        <img src={setting} alt="setting" className="setting" />
      </div>
    </div>
  );
};

export default Navbar;

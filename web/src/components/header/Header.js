import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>DeustoCar</h1>

      <nav className="menu">
        <Link to="/home">Home</Link>
        <Link to="/stock">Stock</Link>
      </nav>
    </header>
  );
};

export default Header;
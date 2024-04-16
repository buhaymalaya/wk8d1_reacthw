import React from 'react';
import '../styles/navbar.css';

export default function NavBar() {
    
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">[mahalo]</a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Mainland</a></li>
        <li><a href="/about">Who We Are</a></li>
        <li><a href="/contact">Reach Out</a></li>
      </ul>
    </nav>
  );
}


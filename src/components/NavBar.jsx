import React from 'react';
import '../styles/navbar.css';

export default function NavBar() {
    
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">[motion picture club]</a>
      </div>
      <ul className="nav-links">
        <li><a href="/movie">My Movies</a></li>
        <li><a href="/movie">Fellow Directors</a></li>
        <li><a href="/movie">Let's Talk</a></li>
      </ul>
    </nav>
  );
}


import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/todolist">TodoList</Link></li>
        <li><Link to="/updown">UpDown 게임</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;

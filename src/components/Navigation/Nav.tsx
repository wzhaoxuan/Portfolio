import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/">Portfolio.</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;

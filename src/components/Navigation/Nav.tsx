import React from 'react';
import styles from './Nav.module.css';

interface NavProps {
  onHomeClick: () => void;
  onSkillsClick: () => void;
  onAboutClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
}

const Nav: React.FC<NavProps> = ({onHomeClick, onSkillsClick, onAboutClick, onProjectsClick, onContactClick}) => {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#home'>Portfolio.</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#contacts'>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;

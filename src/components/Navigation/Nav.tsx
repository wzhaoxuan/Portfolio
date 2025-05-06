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
        <li><a href='#projects' onClick={onProjectsClick}>Projects</a></li>
        <li><a href='#skills' onClick={onSkillsClick}>Skills</a></li>
        <li><a href='#home' onClick={onHomeClick}>Portfolio.</a></li>
        <li><a href='#about' onClick={onAboutClick}>About</a></li>
        <li><a href='#contacts' onClick={onContactClick}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;

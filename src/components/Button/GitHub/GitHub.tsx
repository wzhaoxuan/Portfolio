import React from 'react';
import styles from './GitHub.module.css';
import { FaGithub } from 'react-icons/fa';

const GitHub = () => {
  return (
    <button className={styles.githubButton}>
        <a href="https://linkedin.com/in/yourprofile" target="_blank">
            <div className={styles.githubContainer}>
                <FaGithub size={20} color="black"/>
                <span className={styles.githubText}>GitHub</span>
            </div>
        </a>
    </button>
  );
};

export default GitHub;
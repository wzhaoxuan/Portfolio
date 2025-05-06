import React from 'react';
import styles from './ScrollDown.module.css';
import { FaChevronDown } from 'react-icons/fa';

const ScrollDown: React.FC = () => {
    return (
      <div className={styles.scrollDown}>
        <span>Scroll Down</span>
        <FaChevronDown className={styles.arrow} />
      </div>
    );
  };
  
  export default ScrollDown;
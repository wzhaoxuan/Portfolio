import React from 'react';
import styles from "./CVButton.module.css";

interface CVButtonProps {
    text: string;
    onClick: () => void;
}

const CVButton: React.FC<CVButtonProps> = ({text, onClick}) => {
    return (
        <button className={styles.cvButton} onClick={onClick}>
            {text}
        </button>

    );
};

export default CVButton;
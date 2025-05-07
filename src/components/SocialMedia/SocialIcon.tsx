import React from "react";
import styles from "./SocialIcon.module.css";
import { socialMediaData } from "../../utils/data/socialMediaData";

function SocialIcon() {
    return (
        <nav className={styles.iconContainer}>
            <ul className={styles.socialLinks}>
                {socialMediaData.map(({name, url, icon:Icon}) => (
                    <li key={name}>
                        <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                            <Icon size={25} color="white" />
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default SocialIcon;
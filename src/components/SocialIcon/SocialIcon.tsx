import React from "react";
import styles from "./SocialIcon.module.css";
import { FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";

function SocialIcon() {
    return (
        <nav className={styles.iconContainer}>
            <ul className={styles.socialLinks}>
                <li>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank">
                        <FaLinkedin size={25} color="white"/>
                    </a>
                </li>

                <li>
                    <a href="https://x.com/yourprofile" target="_blank">
                        <FaTwitter size={25} color="white"/>
                    </a>
                </li>

                <li>
                    <a href="https://discord.com/users/yourid" target="_blank">
                        <FaDiscord size={25} color="white"/>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default SocialIcon;
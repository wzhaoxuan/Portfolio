import React from 'react';
import styles from './Home.module.css';
import Nav from '../../components/Navigation/Nav';
import SocialIcon from '../../components/SocialMedia/SocialIcon';
import ScrollDown from '../../components/ScrollDown/ScrollDown';
import Button from '../../components/Button/CVButton';
import {FaLinkedin, FaTwitter, FaDiscord} from 'react-icons/fa6';


const Home: React.FC = () => {

    return (
        <div className={styles.container} id="home">
            <Nav    onProjectsClick={()=> {}} 
                    onSkillsClick={()=> {}} 
                    onHomeClick={() => {}} 
                    onAboutClick={() => {}} 
                    onContactClick={()=> {}} 
            />
            <main className={styles.mainContent}>
                <div className={styles.intro}>
                    <h2>Hello World! I'm</h2>
                    <h1>WONG ZHAO XUAN</h1>

                    <div className={styles.titleContainer}>
                        <h3 className={styles.title}>Software Engineer</h3>
                    </div>

                    <SocialIcon />
                </div>

                <h1 className={styles.social}></h1>

                <div className={styles.cv}>
                    <Button text="Download CV" onClick={() => window.open()}/>
                </div>
            </main>

            <ScrollDown />
        </div>
    );
};

export default Home;
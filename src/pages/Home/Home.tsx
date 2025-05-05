import React from 'react';
import styles from './Home.module.css';
import Nav from '../../components/Navigation/Nav';
import Button from '../../components/Button/CVButton';
// import {FaLinkedIn, FaX, FaDiscord} from 'react-icons/fa6';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <Nav />
            <main className={styles.mainContent}>

                <div className={styles.intro}>
                    <h2>Hello World! I'm</h2>
                    <h1>WONG ZHAO XUAN</h1>

                    <div className={styles.title}>
                        <h3>Software Engineer</h3>
                    </div>

                    <nav>
                        <ul className={styles.socialLinks}>
                            <li>LinkedIn</li>
                            <li>X</li>
                            <li>Discord</li>
                        </ul>
                    </nav>
                </div>

                <h1 className={styles.social}></h1>

                <div className={styles.cv}>
                    <Button text="Download CV" onClick={() => window.open()}/>
                </div>
            </main>
        </div>
    );
};

export default Home;
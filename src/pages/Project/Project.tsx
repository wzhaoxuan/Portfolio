import React from "react";
import styles from "./Project.module.css";
import GitHub from "../../components/Button/GitHub";


const Project: React.FC = () => {
    return (
        <main className={styles.projectContainer} id="projects">
            <h1>Projects</h1>
            <section className={styles.projects}>
                <div className={styles.GitHub}>
                    <GitHub />
                </div>
                <div className={styles.projectCards}>
                    <div className={styles.card} id="card-one">
                        <h2>Project 1</h2>
                        <p>Description of project 1.</p>
                    </div>
                    <div className={styles.card} id="card-two">
                        <h2>Project 2</h2>
                        <p>Description of project 2.</p>
                    </div>
                    <div className={styles.card} id="card-three">
                        <h2>Project 3</h2>
                        <p>Description of project 3.</p>
                    </div>
                    <div className={styles.card} id="card-four">
                        <h2>Project 4</h2>
                        <p>Description of project 4.</p>
                    </div>
                    <div className={styles.card} id="card-five">
                        <h2>Project 5</h2>
                        <p>Description of project 5.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Project;
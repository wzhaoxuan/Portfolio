import React, {useState, useRef} from "react";
import styles from "./Project.module.css";
import GitHub from "../../components/Button/GitHub/GitHub";
import ProjectCard from "../../components/Cards/ProjectCards";
import { projectCards } from "../../utils/projectData";
import useSwipeNavigation from "../../hooks/swipeProjectCards";

const Project: React.FC = () => {

    const { centerIndex, handleMouseDown, handleMouseUp } = useSwipeNavigation(projectCards.length);

    return (
        <main className={styles.projectContainer} id="projects">
            <h1>Projects</h1>
            <section className={styles.projects}>
                <div className={styles.GitHub}>
                    <GitHub />
                </div>
                <div className={styles.projectCards} onMouseDown={handleMouseDown}onMouseUp={handleMouseUp}>
                    {projectCards.map((card, index) => {
                        const offset = index - centerIndex;
                        const style = {
                        transform: `translateX(${offset * 180}px) scale(${1 - Math.abs(offset) * 0.1})`,
                        zIndex: 5 - Math.abs(offset),
                        opacity: offset === 0 ? 1 : 0.6,
                        };

                        return (
                            <ProjectCard
                                key={card.id}
                                {...card}
                                style={style}
                          />
                        );
                    })}
                </div>
            </section>
        </main>
    );
}

export default Project;
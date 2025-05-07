// src/components/ProjectCard.tsx
import React from "react";
import styles from "./ProjectCards.module.css";

interface ProjectCardProps {
  title: string;
  desc: string;
  style: React.CSSProperties;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, desc, style }) => {
  return (
    <div className={styles.card} style={style}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default ProjectCard;

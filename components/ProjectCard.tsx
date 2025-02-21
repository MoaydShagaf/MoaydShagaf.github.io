import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import styles from "../styles/projects.module.css"; // Import CSS module

interface ProjectCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  codeLink: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  altText,
  title,
  description,
  codeLink,
  demoLink,
}) => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    return <h1>Error: LanguageContext not found</h1>;
  }

  const { translate } = languageContext;

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImg}>
        <img src={imageSrc} alt={altText} />
      </div>
      <div className={styles.projectInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a
          href={codeLink}
          className={styles.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {translate("projects.viewCode")}
        </a>
        <a
          href={demoLink}
          className={styles.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {translate("projects.liveDemo")}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
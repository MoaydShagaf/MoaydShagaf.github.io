import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";

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
    <div className="project-card">
      <div className="project-img">
        <img src={imageSrc} alt={altText} />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a
          href={codeLink}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translate("projects.viewCode")}
        </a>
        &nbsp;|&nbsp;
        <a
          href={demoLink}
          className="project-link"
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

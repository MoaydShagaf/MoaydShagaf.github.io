import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    return <h1>Error: LanguageContext not found</h1>;
  }

  const { translate } = languageContext;

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading">
      <div className="section-container">
        <h2 className="section-title neon-border" id="projects-heading">
          {translate("projects.title")}
        </h2>

        <div className="projects-grid">
          {/* 1 */}
          <ProjectCard
            imageSrc="/images/1.png"
            altText={translate("projects.project1.alt")}
            title={translate("projects.project1.title")}
            description={translate("projects.project1.description")}
            codeLink="https://github.com/1"
            demoLink="https://1.com"
          />

          {/* 2 */}
          <ProjectCard
            imageSrc="/images/2.png"
            altText={translate("projects.project2.alt")}
            title={translate("projects.project2.title")}
            description={translate("projects.project2.description")}
            codeLink="https://github.com/2"
            demoLink="https://2.com"
          />

          {/* 3 */}
          <ProjectCard
            imageSrc="/images/3.png"
            altText={translate("projects.project3.alt")}
            title={translate("projects.project3.title")}
            description={translate("projects.project3.description")}
            codeLink="https://github.com/3"
            demoLink="https://3.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";

const About: React.FC = () => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    return <h1>Error: LanguageContext not found</h1>;
  }

  const { translate } = languageContext;

  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="section-container about-layout">
        <div className="about-image">
          <img
            src="/images/moayd.jpg"
            alt={translate("about.imageAlt")}
          />
        </div>
        <div className="about-text">
          <h2 className="section-title neon-border" id="about-heading">
            {translate("about.title")}
          </h2>
          <p className="section-desc">
            {translate("about.intro")}
          </p>
          <p className="section-desc">
            <strong>{translate("about.achievementsTitle")}</strong> {translate("about.achievementsDesc")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

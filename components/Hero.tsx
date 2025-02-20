import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { LanguageContext } from "../context/LanguageProvider";

const Hero: React.FC = () => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    return <h1>Error: LanguageContext not found</h1>;
  }

  const { translate } = languageContext;

  return (
    <section id="hero" className="hero-section" aria-label={translate("hero.ariaLabel")}>
      <div className="star-layer star-layer1" />
      <div className="star-layer star-layer2" />

      <div className="hero-content">
        <div className="hero-image">
          <Image
            src="/images/moayd-cartoon.webp"
            alt={translate("hero.alt")}
            width={300}
            height={300}
            priority
            unoptimized
          />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">
            {translate("hero.greeting")} <span className="neon-text">{translate("hero.name")}</span>
          </h1>
          <p className="hero-subtitle">
            {translate("hero.subtitle")}
          </p>
          <Link href="#projects" className="btn-cta neon-btn">
            {translate("hero.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

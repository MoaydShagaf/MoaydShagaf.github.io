import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    return <h1>Error: LanguageContext not found</h1>;
  }

  const { translate } = languageContext;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <p>
        &copy; <span>{currentYear}</span>{" "}
        <span className="footer-neon">مؤيد شقّاف</span>. {translate("footer.rights")}
      </p>
      <div className="footer-social-links">
        <a
          href="https://facebook.com/Shagaf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          href="https://github.com/MoaydShagaf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://linkedin.com/in/MoaydShagaf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://youtube.com/MoaydShagaf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          href="https://twitter.com/MoaydShagaf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="mailto:moayd@moayd.ly" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

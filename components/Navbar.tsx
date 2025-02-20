import Link from "next/link";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faProjectDiagram,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const languageContext = useContext(LanguageContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!languageContext) {
    return <h1>Error: LanguageContext not found</h1>;
  }

  const { translate, locale, setLocale } = languageContext;

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to switch languages
  const switchLanguage = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">شقّاف</div>

        {/* Desktop Navigation */}
        <nav className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link href="#hero">
                <FontAwesomeIcon icon={faHome} /> {translate("navbar.home")}
              </Link>
            </li>
            <li>
              <Link href="#about">
                <FontAwesomeIcon icon={faUser} /> {translate("navbar.about")}
              </Link>
            </li>
            <li>
              <Link href="#projects">
                <FontAwesomeIcon icon={faProjectDiagram} /> {translate("navbar.projects")}
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <FontAwesomeIcon icon={faEnvelope} /> {translate("navbar.contact")}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Language Switcher */}
        <div className="language-switcher" onClick={switchLanguage}>
          <img
            src={locale === "en" ? "/images/usa.svg" : "/images/libya.svg"}
            alt={locale === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
            width={30}
            height={20}
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </div>
      </div>
    </header>
  );
}

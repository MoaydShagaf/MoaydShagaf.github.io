import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";

const Contact: React.FC = () => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    return <h1>Error: LanguageContext not found</h1>;
  }

  const { translate } = languageContext;

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="section-container">
        <h2 className="section-title neon-border" id="contact-heading">
          {translate("contact.title")}
        </h2>
        <p className="contact-desc">
          {translate("contact.description")}{" "}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            {translate("contact.linkedin")}
          </a>.
        </p>
        <form className="contact-form" action="#" method="POST">
          <div className="form-group">
            <label htmlFor="name">{translate("contact.nameLabel")}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={translate("contact.namePlaceholder")}
              aria-required="true"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{translate("contact.emailLabel")}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={translate("contact.emailPlaceholder")}
              aria-required="true"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{translate("contact.messageLabel")}</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder={translate("contact.messagePlaceholder")}
              aria-required="true"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-cta neon-btn">
            {translate("contact.submit")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

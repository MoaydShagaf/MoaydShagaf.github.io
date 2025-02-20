import { createContext, useState, useEffect, ReactNode } from "react";
import en from "../translations/en.json";
import ar from "../translations/ar.json";

interface LanguageContextType {
  locale: string;
  setLocale: (locale: string) => void;
  translate: (key: string) => string;
  direction: string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [locale, setLocale] = useState("ar");
  const [direction, setDirection] = useState("");

  const translations: Record<string, any> = { en, ar };

  // ✅ Improved function to access nested keys
  const translate = (key: string): string => {

    // ✅ Support nested keys like "hero.greeting"
    const keys = key.split(".");
    let result = translations[locale];

    for (const k of keys) {
      if (result[k] === undefined) {
        console.error(`❌ Translation key "${key}" not found`);
        return key; // Return key if translation is missing
      }
      result = result[k];
    }

    return result;
  };

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale");
    if (storedLocale) {
      setLocale(storedLocale);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
    setDirection(locale === "ar" ? "" : "");
    console.log(`🔄 Updated language to: ${locale}, Direction: ${direction}`);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, translate, direction }}>
      <div dir={direction}>{children}</div>
    </LanguageContext.Provider>
  );
};

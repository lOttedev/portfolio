/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import translations from "./translations";

const LanguageContext = createContext(null);

function getInitialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "fr" || saved === "en") return saved;
  } catch (e) {
    // localStorage indisponible : on garde le français
  }
  return "fr";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      // pas grave si on ne peut pas mémoriser
    }
  }, [lang]);

  function toggleLang() {
    setLang((prev) => (prev === "fr" ? "en" : "fr"));
  }

  // t("clé") pour les textes fixes, t({ fr, en }) pour les données traduites
  function t(key) {
    if (key && typeof key === "object") return key[lang] ?? key.fr;
    return translations[lang][key] ?? translations.fr[key] ?? key;
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

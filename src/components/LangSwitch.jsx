import { useLanguage } from "../i18n/LanguageContext";
import Flag from "./Flag";

function LangSwitch() {
  const { lang, toggleLang, t } = useLanguage();
  const isEn = lang === "en";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEn}
      aria-label={t("switchLang")}
      className={`lang-switch ${isEn ? "is-en" : ""}`}
      onClick={toggleLang}
    >
      <span className={`lang-label ${isEn ? "" : "active"}`}>FR</span>
      <span className="lang-track">
        <span className="lang-knob">
          <Flag lang={lang} />
        </span>
      </span>
      <span className={`lang-label ${isEn ? "active" : ""}`}>EN</span>
    </button>
  );
}

export default LangSwitch;

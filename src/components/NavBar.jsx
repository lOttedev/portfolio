import { useState, useEffect } from "react";
import logo from "../assets/images/chouettelotte.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../i18n/LanguageContext";
import LangSwitch from "./LangSwitch";

function NavBar() {
  const [menuBurger, setMenuBurger] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t } = useLanguage();

  function toggleMenu() {
    setMenuBurger(!menuBurger);
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <navbar>
        <a href="#home">
          <img src={logo} alt="logo" id="logonav"/>
        </a>

        <ul className="menu">
          <li>
            <a href="#home" className={activeSection === "home" ? "active" : ""}>
              {t("navHome")}
            </a>
          </li>
          <li>
            <a href="#about" className={activeSection === "about" ? "active" : ""}>{t("navAbout")}</a>
          </li>
          <li>
            <a href="#portfolio" className={activeSection === "portfolio" ? "active" : ""}>{t("navPortfolio")}</a>
          </li>
          <li>
            <a href="#contact" className={activeSection === "contact" ? "active" : ""}>{t("navContact")}</a>
          </li>
          <li>
            <LangSwitch />
          </li>
        </ul>

      <FontAwesomeIcon
        className="burger"
        icon={menuBurger ? faTimes : faBars}
        onClick={toggleMenu}
      />
      {menuBurger && (
        <div className="menu-backdrop" onClick={toggleMenu} />
      )}
      {menuBurger && (
        <ul
          className="menuBurger"
          onClick={(e) => {
            if (e.target.closest("a")) setMenuBurger(false);
          }}
        >
          <li>
            <a href="#home" className={activeSection === "home" ? "active" : ""}>
              {t("navHome")}
            </a>
          </li>
          <li>
            <a href="#about" className={activeSection === "about" ? "active" : ""}>{t("navAbout")}</a>
          </li>
          <li>
            <a href="#portfolio" className={activeSection === "portfolio" ? "active" : ""}>{t("navPortfolio")}</a>
          </li>
          <li>
            <a href="#contact" className={activeSection === "contact" ? "active" : ""}>{t("navContact")}</a>
          </li>
          <li>
            <LangSwitch />
          </li>
        </ul>
      )}
    </navbar>
  );
}

export default NavBar;

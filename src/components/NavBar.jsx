import { useState } from "react";
import logo from "../assets/images/chouettelotte.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [menuBurger, setMenuBurger] = useState(false);

  function toggleMenu() {
    setMenuBurger(!menuBurger);
  }

  return (
    <navbar>
        <a href="#home" className="active">
          <img src={logo} alt="logo" id="logonav"/>
        </a>

        <ul className="menu">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">Mon parcours</a>
          </li>
          <li>
            <a href="#portfolio">Mes projets</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

      <FontAwesomeIcon
        className="burger"
        icon={menuBurger ? faTimes : faBars}
        onClick={toggleMenu}
      />
      {menuBurger && (
        <ul className="menuBurger">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">Mon parcours</a>
          </li>
          <li>
            <a href="#portfolio">Mes projets</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </navbar>
  );
}

export default NavBar;

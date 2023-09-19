import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer id='main-footer'>
      <div>
        <ul className="icons">
          <li>
            <a href="https://www.linkedin.com/in/laurene-buttelli/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/lOttedev">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        copyright &copy; Lotte, 2023, designed by Lotte
      </div>
    </footer>
  );
}

export default Footer;
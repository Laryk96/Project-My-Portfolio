import './style.css';

import instagram from './../../img/icons/instagram.svg';
import facebook from './../../img/icons/icons8-facebook.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://instagram.com/mr__lary">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.facebook.com/profile.php?id=100005385106186">
                <img src={facebook} alt="facebook" width={50} />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/Laryk96">
                <img src={gitHub} alt="gitHub" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/%D0%BB%D0%B0%D1%80%D0%B8-%D0%B0%D0%B3%D1%83%D0%B5%D0%B1%D0%BE%D1%80-b8aab2244/">
                <img src={linkedIn} alt="linkedIn" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

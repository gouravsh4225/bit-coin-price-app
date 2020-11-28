import React from "react";
import gitHubIcon from "../../assets/social-media-icon/github.png";
import twitterIcon from "../../assets/social-media-icon/twiter.png";
import linkedInIcon from "../../assets/social-media-icon/linkedin.png";
import mediumIcon from "../../assets/social-media-icon/medium.png";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer-container">
      <div className="social-links">
        <ul className="social-list">
          <li className="social-item">
            <a
              className="social-link"
              href="https://github.com/gouravsh4225"
              target="_blank"
              alt="github"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src={gitHubIcon} alt="github" />
            </a>
          </li>
          <li className="social-item">
            <a
              className="social-link"
              target="_blank"
              href="https://twitter.com/GouravS25938222"
              alt="twitter"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src={twitterIcon} alt="twitter" />
            </a>
          </li>
          <li className="social-item">
            <a
              className="social-link"
              target="_blank"
              href="https://www.linkedin.com/in/gourav-sharma4225/"
              alt="linkedIn"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src={linkedInIcon} alt="linkedIn" />
            </a>
          </li>
          <li className="social-item">
            <a
              className="social-link"
              target="_blank"
              href="https://medium.com/@gouravsh4225"
              alt="medium"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src={mediumIcon} alt="medium" />
            </a>
          </li>
        </ul>
      </div>
      <div className="copy-right-content">
        © 2020 Copyright:
        <a
          href="https://gouravsh4225.github.io/v2-portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gourav Sharma
        </a>
      </div>
    </section>
  );
}
export default Footer;

import React from "react";
import YGlogo from "../img/ygtLogo.svg";
import KTlogo from "../img/ktunlogo.png";
import insta from "../img/instagram-clr.png";
import twitter from "../img/twitter-clr.png";
import linkedin from "../img/linkedin-clr.png";
import discord from "../img/discord-clr.png";

function Footer() {
    
  return (
    <section>
      <div className="footer-box">
        <div className="footer-links">
          <ul className="footer-list">
            <li>
              <a className="footer-list-item" href="#neubar">
                ANASAYFA
              </a>
            </li>
            <li>
              <a className="footer-list-item" href="#hakkimizda">
                HAKKIMIZDA
              </a>
            </li>
            <li>
              <a className="footer-list-item" href="#galeri">
                GALERİ
              </a>
            </li>
            <li>
              <a className="footer-list-item" href="#iletisim">
                İLETİŞİM
              </a>
            </li>
            <li>
              <a
                className="footer-link-item"
                target="_blank"
                rel="noreferrer"
                href="https://forms.gle/zjvPBFNmNASa9VHR9"
              >
                <button className="footer-button">BİZE KATIL</button>
              </a>
            </li>
          </ul>
        </div>
        <div className="flogo-box">
          <img alt="yg-logo" className="footer-logo" src={YGlogo} />
        </div>
        <div className="flogo-box">
          <img alt="ktun-logo" className="footer-logo" src={KTlogo} />
        </div>
        <div className="footer-socials">
          <h3 className="f-social-title">Bizi Takip Edin!</h3>
          <ul className="footer-list">
            <li list>
              <a className="footer-list-item" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ktun.yazilimgelistirme/">
                <span className="f-social">Instagram</span>{" "}
                <img className="social-logo" alt="insta-logo" src={insta} />
              </a>
            </li>
            <li>
              <a className="footer-list-item" target="_blank" rel="noopener noreferrer" href="https://twitter.com/KTUNYazilimGT">
                <span className="f-social">Twitter</span>{" "}
                <img className="social-logo" alt="twitter-logo" src={twitter} />
              </a>
            </li>
            <li>
              <a className="footer-list-item" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/ktun-yazilimgelistirme/">
                <span className="f-social">LinkedIn</span>{" "}
                <img
                  className="social-logo"
                  alt="linkedin-logo"
                  src={linkedin}
                />
              </a>
            </li>
            <li>
              <a className="footer-list-item" target="_blank" rel="noopener noreferrer" href="http://discord.gg/NgKXpsyatr">
                <span className="f-social">Discord</span>{" "}
                <img className="social-logo" alt="discord-logo" src={discord} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;

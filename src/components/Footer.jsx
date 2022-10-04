import React from "react";
import YGlogo from "../img/ygtnavbar.svg";
import KTlogo from "../img/ktunlogo.png";
import insta from "../img/square-instagram.svg";
import twitter from "../img/twitter.svg";
import linkedin from "../img/linkedin.svg";
import discord from "../img/discord.svg";

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
        <div>
          <img alt="yg-logo" className="footer-logo" src={YGlogo} />
        </div>
        <div>
          <img alt="ktun-logo" className="footer-logo" src={KTlogo} />
        </div>
        <div className="footer-socials">
          <h3>Bizi Takip Edin!</h3>
          <ul className="footer-list">
            <li list>
              <a className="footer-list-item" href="#">
                <img className="social-logo" alt="insta-logo" src={insta} />{" "}
                @ktun.yazilimgelistirme
              </a>
            </li>
            <li>
              <a className="footer-list-item" href="#">
                <img className="social-logo" alt="twitter-logo" src={twitter} />{" "}
                @KTUN.YazilimGT
              </a>
            </li>
            <li>
              <a className="footer-list-item" href="#">
                <img
                  className="social-logo"
                  alt="linkedin-logo"
                  src={linkedin}
                />{" "}
                @ktun.yazilimgelistirme
              </a>
            </li>
            <li>
              <a className="footer-list-item" href="#">
                <img className="social-logo" alt="discord-logo" src={discord} />{" "}
                Yazılım Geliştirme Topluluğu
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;

import React from "react";
import osman from "../img/profile/osman.jpeg";
import sevinc from "../img/profile/sevinc.jpg";
import irem from "../img/profile/irme.jpeg";
import sezai from "../img/profile/sezai.jpeg";
import aHaydar from "../img/profile/aliHaydar.jpeg";
import ilknur from "../img/profile/ilknur.jpeg";
import saziye from "../img/profile/saziye.jpeg";
import seyda from "../img/profile/seyda.jpeg";
import esra from "../img/profile/esra.jpeg";

function Yonetim1() {
  return (
    <div>
      <h1 className="yon-title">Yönetim Kurulu</h1>
      <div className="yon-big-box">
        <div className="yon-box">
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={osman} />
            <p className="yon-title">Osman CEYLAN</p>
          </div>
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={sevinc} />
            <p className="yon-title">Sevinç TANIŞ</p>
          </div>
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={irem} />
            <p className="yon-title">İrem DEMİR</p>
          </div>
        </div>
        <div className="yon-box">
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={sezai} />
            <p className="yon-title">Sezai Öztürk</p>
          </div>
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={aHaydar} />
            <p className="yon-title">A. Haydar ŞEFLEK</p>
          </div>
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={ilknur} />
            <p className="yon-title">İlknur DEMİRAL</p>
          </div>
        </div>
        <div className="yon-box">
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={saziye} />
            <p className="yon-title">Şaziye DAĞ</p>
          </div>
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={seyda} />
            <p className="yon-title">Şeyda AÇIKGÖZ</p>
          </div>
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={esra} />
            <p className="yon-title">Esra TOSUN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yonetim1;

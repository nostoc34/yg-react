import React from "react";
import osman from "../img/profile/osman.jpeg";
import sevinc from "../img/profile/sevinc.jpg";
import irem from "../img/profile/irme.jpeg";
import sezai from "../img/profile/sezai.jpeg";
import ibrahim from "../img/profile/ibrahim.jpeg";
import ilknur from "../img/profile/ilknur.jpeg";
import saziye from "../img/profile/saziye.jpeg";
import seyda from "../img/profile/seyda.jpeg";
import esra from "../img/profile/esra.jpeg";

function Yonetim1() {
  return (
    <div>
    <h1 className="yon-title">Yönetim Kurulu</h1>
    <div className="yon-box">
      <div className="yon-item">
        <img className="yon-img" src={osman} />
        <p className="yon-title">Osman Can CEYLAN</p>
      </div>
      <div className="yon-item">
        <img className="yon-img" src={sevinc} />
        <p className="yon-title">Sevinç TANIŞ</p>
      </div>
      <div className="yon-item">
        <img className="yon-img" src={irem} />
        <p className="yon-title">İrem DEMİR</p>
      </div>
      <div className="yon-item">
        <img className="yon-img" src={sezai} />
        <p className="yon-title">Sezai Öztürk</p>
      </div>
      <div className="yon-item">
        <img className="yon-img" src={ibrahim} />
        <p className="yon-title">İbrahim DAĞCI</p>
      </div>
      <div className="yon-item">
        <img className="yon-img" src={ilknur} />
        <p className="yon-title">İlknur DEMİRAL</p>
      </div>
      <div className="yon-item">
        <img className="yon-img" src={saziye} />
        <p className="yon-title">Şaziye DAĞ</p>
      </div>
      <div className="yon-item">
        <img className="yon-img" src={seyda} />
        <p className="yon-title">Şeyda AÇIKGÖZ</p>
      </div>
      <div className="yon-item yon-last-item">
        <img className="yon-img" src={esra} />
        <p className="yon-title">Esra TOSUN</p>
      </div>
    </div>
    </div>
  );
}

export default Yonetim1;

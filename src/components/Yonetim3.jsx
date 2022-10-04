import React from "react";
import osman from "../img/profile/osman.jpeg";
import irem from "../img/profile/irme.jpeg";
import saziye from "../img/profile/saziye.jpeg";
import muhammet from "../img/profile/muhammet.jpeg";
import selim from "../img/profile/selim.jpg";
import mehmet from "../img/profile/mehmet.png";


function Yonetim3() {
    return (
      <div>
      <h1 className="yon-title">Sosyal Medya Ekibi</h1>
      <div className="yon-box">
        <div className="yon-item">
          <img className="yon-img" src={osman} />
          <p className="yon-title">Osman Can CEYLAN</p>
        </div>
        <div className="yon-item">
          <img className="yon-img" src={irem} />
          <p className="yon-title">İrem DEMİR</p>
        </div>
        <div className="yon-item">
          <img className="yon-img" src={saziye} />
          <p className="yon-title">Şaziye DAĞ</p>
        </div>
        <div className="yon-item">
          <img className="yon-img" src={muhammet} />
          <p className="yon-title">Muhammet Sait YILMAZ</p>
        </div>
        <div className="yon-item">
          <img className="yon-img" src={selim} />
          <p className="yon-title">Selim YAMAN</p>
        </div>
        <div className="yon-item">
          <img className="yon-img" src={mehmet} />
          <p className="yon-title">Mehmet KONUKÇU</p>
        </div>
      </div>
      </div>
    );
  }
  
  export default Yonetim3;
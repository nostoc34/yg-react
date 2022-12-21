import React from "react";
import mervegul from "../img/profile/mervegul.jpeg";
import asude from "../img/profile/asude.jpeg";
import zisan from "../img/profile/zisan.jpeg";
import muhammet from "../img/profile/muhammet.jpeg";
import arif from "../img/profile/arif.jpeg";
import eren from "../img/profile/eren.jpeg";

function Yonetim2() {
  return (
    <div>
      <h1 className="yon-title">Yönetim Kurulu</h1>
      <div className="yon-box">
        <div className="yon-item">
          <img className="yon-img" alt="profile" src={mervegul} />
          <p className="yon-title">Mervegül KÖK</p>
        </div>
        <div className="yon-item">
          <img className="yon-img" alt="profile" src={asude} />
          <p className="yon-title">Asude KILIÇ</p>
        </div>
        <div className="yon-item">
          <img className="yon-img" alt="profile" src={zisan} />
          <p className="yon-title">Zişan AYDOĞAN</p>
        </div>
        <div className="yon-item">
          <img className="yon-img" alt="profile" src={muhammet} />
          <p className="yon-title">M. Sait YILMAZ</p>
        </div>
        <div className="yon-item">
          <img className="yon-img" alt="profile" src={arif} />
          <p className="yon-title">M. Arif ACAY</p>
        </div>
        <div className="yon-item">
          <img className="yon-img" alt="profile" src={eren} />
          <p className="yon-title">Eren GÜNER</p>
        </div>
      </div>
    </div>
  );
}

export default Yonetim2;

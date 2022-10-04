import React from "react";
import temp from "../img/avatar.jpg";
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
      <div className="yon-box-2">
        <div className="yon-item">
          <img className="yon-img" src={temp} />
          <p className="yon-title">Umut DURAN</p>
        </div>
        <div className="yon-item">
          <img className="yon-img" src={mervegul} />
          <p className="yon-title">Mervegül KÖK</p>
        </div>
        <div className="yon-item">
          <img className="yon-img" src={asude} />
          <p className="yon-title">Asude KILIÇ</p>
        </div>
        <div className="yon-item">
          <img className="yon-img" src={temp} />
          <p className="yon-title">Oğuzhan ÇOBAN</p>
        </div>
        <div className="yon-item">
          <img className="yon-img" src={zisan} />
          <p className="yon-title">Zişan AYDOĞAN</p>
        </div>
        <div className="yon-item">
          <img className="yon-img" src={muhammet} />
          <p className="yon-title">Muhammet Sait YILMAZ</p>
        </div>
      </div>
      <div className="yon-2-last-row">
          <div className="yon-item yon2-item">
            <img className="yon-img" src={arif} />
            <p className="yon-title">Muhammet Arif ACAY</p>
          </div>
          <div className="yon-item">
            <img className="yon-img" src={eren} />
            <p className="yon-title">Eren GÜNER</p>
          </div>
        </div>
    </div>
  );
}

export default Yonetim2;

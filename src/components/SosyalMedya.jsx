import React from "react";
import saziye from "../img/profile/saziye.jpeg";
import selim from "../img/profile/selim.jpg";
import mehmet from "../img/profile/mehmet.jpeg";
import enes from "../img/profile/enes.jpeg";

function SosyalMedya() {
  return (
    <div>
      <h1 className="yon-title">Sosyal Medya Ekibi</h1>
      <div className="yon-big-box">
        <div className="yon-box">
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={enes} />
            <p className="yon-title">Enes CANDEMİR</p>
          </div>
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={saziye} />
            <p className="yon-title">Şaziye DAĞ</p>
          </div>
        </div>
        <div className="yon-box">
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={selim} />
            <p className="yon-title">Selim YAMAN</p>
          </div>

          <div className="yon-item">
            <img className="yon-img" alt="profile" src={mehmet} />
            <p className="yon-title">Mehmet KONUKÇU</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SosyalMedya;

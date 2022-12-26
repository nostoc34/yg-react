import React from "react";
import atakan from "../img/profile/atakan.jpeg";
import busra from "../img/profile/busra.jpeg";
import enes from "../img/profile/enes.jpeg";
import mehmet from "../img/profile/mehmet.jpeg";
import omer from "../img/profile/omer.jpeg";

function Yonetim2() {
  return (
    <div>
      <h1 className="yon-title">Yönetim Kurulu</h1>
      <div className="yon-big-box">
        <div className="yon-box">
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={atakan} />
            <p className="yon-title">Atakan CEYLAN</p>
          </div>
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={busra} />
            <p className="yon-title">Büşra KAYA</p>
          </div>
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={enes} />
            <p className="yon-title">Enes CANDEMİR</p>
          </div>
        </div>
        <div className="yon-box">
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={mehmet} />
            <p className="yon-title">Mehmet KONUKÇU</p>
          </div>
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={omer} />
            <p className="yon-title">Ömer ŞAHİN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yonetim2;

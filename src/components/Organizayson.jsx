import React from "react";
import busra from "../img/profile/busra.jpeg";
import cennet from "../img/profile/cennet.jpeg";

function Organizasyon() {
  return (
    <div>
      <h1 className="yon-title">Etkinlik-Organizasyon Ekibi</h1>
      <div className="yon-big-box">
        <div className="yon-box">
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={busra} />
            <p className="yon-title">Büşra KAYA</p>
          </div>
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={cennet} />
            <p className="yon-title">Cennet Nur BAYAR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organizasyon;

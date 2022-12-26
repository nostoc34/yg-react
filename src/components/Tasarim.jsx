import React from "react";
import osman from "../img/profile/osman.jpeg";
import sevinc from "../img/profile/sevinc.jpg";
import irem from "../img/profile/irme.jpeg";

function Tasarim() {
  return (
    <div>
      <h1 className="yon-title">Tasarım Ekibi</h1>
      <div className="yon-big-box">
        <div className="yon-box">
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={osman} />
            <p className="yon-title">Osman CEYLAN</p>
          </div>

          <div className="yon-item">
            <img className="yon-img" alt="profile" src={irem} />
            <p className="yon-title">İrem DEMİR</p>
          </div>

          <div className="yon-item">
            <img className="yon-img" alt="profile" src={sevinc} />
            <p className="yon-title">Sevinç TANIŞ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasarim;

import React from "react";
import zehra from "../img/profile/zehra.jpeg";

function Sponsorluk() {
  return (
    <div>
      <h1 className="yon-title">Sponsorluk Ekibi</h1>
      <div className="yon-big-box">
        <div className="yon-box">
          <div className="yon-item">
            <img className="yon-img" alt="profile" src={zehra} />
            <p className="yon-title">Zehra KÜÇÜKER</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsorluk;

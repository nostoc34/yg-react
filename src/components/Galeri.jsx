import React, { useState } from "react";
import CreateAlbum from "./GaleriFrame";
import albums from "./albums";

function Galeri() {
  
  return (
    <section id="galeri">
      <div className="container">
        <div className="row galeri-row">
          <h1 className="title">GALERİ</h1>

            <div className="try">
              {albums.map(CreateAlbum)}
            </div>
        </div>
      </div>
    </section>
  );
}

export default Galeri;

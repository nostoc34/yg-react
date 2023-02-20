import React, { useEffect, useState } from "react";
import createDuyuru from "./DuyuruFrame";
import DuyuruKatil from "./DuyuruKatil";
import duyurular from "./duyuru";
import Pagination from "./Pagination";

export default function Duyurular() {
  

  return (
    <section id="duyurular">
      <div className="duyuru-container container">
        <div className="row duyuru-row">
          <div className="duyuru-col col-lg-6 col-xs-12">
            <h3 className="duyuru-baslik">DUYURULAR</h3>
            <Pagination />
          </div>
          <DuyuruKatil />
        </div>
      </div>
      
    </section>
  );
}


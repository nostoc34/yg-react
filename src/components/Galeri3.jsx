import React from "react";
import Galeri3Frame from "./Galeri3Frame";

import ct1_1 from "../img/galeri/ct1_1.jpeg";
import ct1_2 from "../img/galeri/ct1_2.jpeg";
import ct1_3 from "../img/galeri/ct1_3.jpeg";
import ct1_4 from "../img/galeri/ct1_4.jpeg";
import ws1_1 from "../img/galeri/ws1_1.jpeg";
import ws1_2 from "../img/galeri/ws1_2.jpeg";
import ws1_3 from "../img/galeri/ws1_3.jpeg";
import ws1_4 from "../img/galeri/ws1_4.jpeg";
import nk1_1 from "../img/galeri/nk1_1.jpeg";
import nk1_2 from "../img/galeri/nk1_2.jpeg";
import nk1_3 from "../img/galeri/nk1_3.jpeg";
import nk1_4 from "../img/galeri/nk1_4.jpeg";
import bw1_1 from "../img/galeri/bw1_1.jpeg";
import bw1_2 from "../img/galeri/bw1_2.jpeg";
import bw1_3 from "../img/galeri/bw1_3.jpeg";
import bw1_4 from "../img/galeri/bw1_4.jpeg";

function Galeri3() {
  return (
    <section id="galeri">
      <div className="container">
        <div className="row galeri-row">
          <h1 className="title">GALERİ</h1>
          
          <div className="try">

          <Galeri3Frame
              id="gale4"
              id2="4gale"
              target="#gale4"
              resim={bw1_1}
              header="Bowling Etkinliği"
              tarih="17 Aralık 2022"
              resim1={bw1_1}
              resim2={bw1_2}
              resim3={bw1_3}
              resim4={bw1_4}
            />

          <Galeri3Frame
              id="gale3"
              id2="3gale"
              target="#gale3"
              resim={nk1_1}
              header="Gerçek Mühendisler Aranıyor"
              tarih="07 Kasım 2022"
              resim1={nk1_1}
              resim2={nk1_2}
              resim3={nk1_3}
              resim4={nk1_4}
            />

            <Galeri3Frame
              id="gale1"
              id2="1gale"
              target="#gale1"
              resim={ct1_1}
              header="Coffee&Talk Etkinliği"
              tarih="28 Mayıs 2022"
              resim1={ct1_1}
              resim2={ct1_2}
              resim3={ct1_3}
              resim4={ct1_4}
            />

            <Galeri3Frame
              id="gale2"
              id2="2gale"
              target="#gale2"
              resim={ws1_1}
              header="Android Mobil Uygulama Geliştirme Etkinliği"
              tarih="23 Mayıs 2022"
              resim1={ws1_1}
              resim2={ws1_2}
              resim3={ws1_3}
              resim4={ws1_4}
            />

            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Galeri3;

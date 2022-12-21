import React, { useState } from "react";
import GaleriFrame from "./GaleriFrame";
import ct1_1 from "../img/galeri/ct1_1.jpeg";
import ct1_2 from "../img/galeri/ct1_2.jpeg";
import ct1_3 from "../img/galeri/ct1_3.jpeg";
import ct1_4 from "../img/galeri/ct1_4.jpeg";
import ws1_1 from "../img/galeri/ws1_1.jpeg";
import ws1_2 from "../img/galeri/ws1_2.jpeg";
import ws1_3 from "../img/galeri/ws1_3.jpeg";
import ws1_4 from "../img/galeri/ws1_4.jpeg";

function Galeri() {
  const [isOpen, setOpen] = useState(false);

  function openG(e) {
    setOpen(true);
    var kimlik = e.target.id;
    console.log(kimlik);
    for (var i = 0; i < document.querySelectorAll(".anaresim").length; i++) {
      document.querySelectorAll(".anaresim")[i].style.display = "none";
    }
    if (kimlik === "1gale") {
      document.getElementById("gale1").style.display = "block";
    }
    if (kimlik === "2gale") {
      document.getElementById("gale2").style.display = "block";
    }
    if (kimlik === "3gale") {
      document.getElementById("gale3").style.display = "block";
    }
  }

  function closeG() {
    setOpen(false);
    for (
      var i = 0;
      i < document.querySelectorAll(".galeri-slider").length;
      i++
    ) {
      document.querySelectorAll(".galeri-slider")[i].style.display = "none";
    }
    for (var j = 0; j < document.querySelectorAll(".anaresim").length; j++) {
      document.querySelectorAll(".anaresim")[j].style.display = "block";
    }
  }

  return (
    <section id="galeri">
      <div className="container">
        <div className="row galeri-row">
          <h1 className="title">GALERİ</h1>
          <div className="try">
            <button
              className="galeri-btn"
              style={{ display: isOpen ? "block" : "none" }}
              onClick={closeG}
            >
              X
            </button>

            <GaleriFrame
              id="gale1"
              id2="1gale"
              target="#gale1"
              resim={ct1_1}
              header="Coffee&Talk Etkinliği"
              laf="Bir araya gelmek bir başlangıçtır, birlikte kalmak ilerlemedir ve birlikte çalışmak başarıdır."
              tarih="28 Mayıs 2022"
              resim1={ct1_1}
              resim2={ct1_2}
              resim3={ct1_3}
              resim4={ct1_4}
              openFunction={openG}
            />

            <GaleriFrame
              id="gale2"
              id2="2gale"
              target="#gale2"
              resim={ws1_1}
              header="Android Mobil Uygulama Geliştirme Etkinliği"
              laf="Bir noktadan başka bir noktaya gitmenin en kısa yolu, işin ustasını ziyaret etmekten geçer."
              tarih="23 Mayıs 2022"
              resim1={ws1_1}
              resim2={ws1_2}
              resim3={ws1_3}
              resim4={ws1_4}
              openFunction={openG}
            />

            <GaleriFrame
              id="gale3"
              id2="3gale"
              target="#gale3"
              resim={ct1_1}
              header="Coffee&Talk Etkinliği"
              laf="Bir araya gelmek bir başlangıçtır, birlikte kalmak ilerlemedir ve birlikte çalışmak başarıdır."
              tarih="28 Mayıs 2022"
              resim1={ct1_2}
              resim2={ct1_2}
              resim3={ct1_3}
              resim4={ct1_4}
              openFunction={openG}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Galeri;

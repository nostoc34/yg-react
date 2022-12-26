import React, { useEffect, useState } from "react";
import createDuyuru from "./DuyuruFrame";
import DuyuruKatil from "./DuyuruKatil";
import { duyuru1 } from "./duyuru";

export default function Duyurular() {
  const [page, pageSet] = useState(1);
  var lengthOfPages = 3;
  console.log(page);

  // useEffect(deneme);

  function incPage() {
    if (page < lengthOfPages) {
      pageSet(page + 1);
      console.log(page);
    } else {
      pageSet(1);
      console.log(page);
    }
  }
  function decPage() {
    if (page > 1) {
      pageSet(page - 1);
      console.log(page);
    } else {
      pageSet(lengthOfPages);
      console.log(page);
    }
  }

  function setPage(e) {
    var crPage = parseInt(e.target.innerHTML);
    pageSet(crPage);
    console.log(page);
  }
  // function deneme() {
  //   if (page === 1) {
  //     for (var i = 0; i < document.querySelectorAll(".pages").length; i++) {
  //       document.querySelectorAll(".pages")[i].style.color = "#1d559fd7";
  //       document.querySelectorAll(".pages")[i].style.backgroundColor = "#fff";
  //     }
  //     document.getElementById("p1").style.color = "#fff";
  //     document.getElementById("p1").style.backgroundColor = "#1d559fd7";
  //   }
  //   if (page === 2) {
  //     for (var i = 0; i < document.querySelectorAll(".pages").length; i++) {
  //       document.querySelectorAll(".pages")[i].style.color = "#1d559fd7";
  //       document.querySelectorAll(".pages")[i].style.backgroundColor = "#fff";
  //     }
  //     document.getElementById("p2").style.color = "#fff";
  //     document.getElementById("p2").style.backgroundColor = "#1d559fd7";
  //   }
  //   if (page === 3) {
  //     for (var i = 0; i < document.querySelectorAll(".pages").length; i++) {
  //       document.querySelectorAll(".pages")[i].style.color = "#1d559fd7";
  //       document.querySelectorAll(".pages")[i].style.backgroundColor = "#fff";
  //     }
  //     document.getElementById("p3").style.color = "#fff";
  //     document.getElementById("p3").style.backgroundColor = "#1d559fd7";
  //   }
  // }

  return (
    <section id="duyurular">
      <div className="duyuru-container container">
        <div className="row duyuru-row">
          <div className="duyuru-col col-lg-6 col-xs-12">
            <h3 className="duyuru-baslik">DUYURULAR</h3>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-interval="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {duyuru1.map(createDuyuru)}
                </div>
                {/* <div className="carousel-item">{duyuru2.map(createDuyuru)}</div>
                <div className="carousel-item">{duyuru3.map(createDuyuru)}</div> */}
              </div>
            </div>
            <div className="pages-box deneme">
              <button
                onClick={decPage}
                className="page-btn page-link"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
              <button
                id="p1"
                onClick={setPage}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="page-btn pages"
                aria-current="true"
                aria-label="Slide 1"
              >
                1
              </button>
              {/* <button
                id="p2"
                onClick={setPage}
                className="page-btn pages"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              >
                2
              </button>
              <button
                id="p3"
                onClick={setPage}
                className="page-btn pages"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              >
                3
              </button> */}
              <button
                onClick={incPage}
                className="page-btn page-link"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </div>
          </div>
          <DuyuruKatil />
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Yonetim1 from "./Yonetim1";
import Yonetim2 from "./Yonetim2";
import SosyalMedya from "./SosyalMedya";
import Tasarim from "./Tasarim";
import Organizasyon from "./Organizayson";
import Sponsorluk from "./Sponsorluk";

function Yonetim() {
  return (
    <section id="yonetim-sec">
      <div className="container">
        <div className="yonetim row">
          <div
            id="carouselExampleIndicatorss"
            className="carousel slide"
            data-bs-interval="false"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicatorss"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicatorss"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicatorss"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicatorss"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicatorss"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicatorss"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Yonetim1 />
              </div>
              <div className="carousel-item">
                <Yonetim2 />
              </div>
              <div className="carousel-item">
                <SosyalMedya />
              </div>
              <div className="carousel-item">
                <Tasarim />
              </div>
              <div className="carousel-item">
                <Organizasyon />
              </div>
              <div className="carousel-item">
                <Sponsorluk />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicatorss"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicatorss"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Yonetim;

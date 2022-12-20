import React from "react";
import Yonetim1 from "./Yonetim1";
import Yonetim2 from "./Yonetim2";
import Yonetim3 from "./Yonetim3";

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
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Yonetim1 />
              </div>
              <div className="carousel-item">
                <Yonetim2 />
              </div>
              <div className="carousel-item">
                <Yonetim3 />
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

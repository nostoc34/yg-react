import React, { useState } from "react";
import createDuyuru from "./DuyuruFrame";
import DuyuruKatil from "./DuyuruKatil";
import { duyuru1, duyuru2, duyuru3 } from "./duyuru";

export default function Duyurular() {
  return (
    <div className="duyuru-container container">
      <div className="row duyuru-row">
        <div className="duyuru-col col-lg-6 col-xs-12">
          <h3 className="duyuru-baslik">DUYURULAR</h3>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="true"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                {duyuru1.map(createDuyuru)}
              </div>
              <div class="carousel-item">{duyuru2.map(createDuyuru)}</div>
              <div class="carousel-item">{duyuru3.map(createDuyuru)}</div>
            </div>

            <div className="pages">
              <button
                class="page-btn page-link"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active page-btn"
                aria-current="true"
                aria-label="Slide 1"
              >
                1
              </button>
              <button
                className="page-btn"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              >
                2
              </button>
              <button
                className="page-btn"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              >
                3
              </button>
              <button
                class="page-btn page-link"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </div>

            {/* <div className="pages">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <button
                      class="page-link page-btn"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                  <li class="page-item">
                    <button
                      class="page-link page-btn"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                    >
                      1
                    </button>
                  </li>
                  <li class="page-item">
                    <button
                      class="page-link page-btn"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                    >
                      2
                    </button>
                  </li>
                  <li class="page-item">
                    <button
                      class="page-link page-btn"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                    >
                      3
                    </button>
                  </li>
                  <li class="page-item">
                    <button
                      class="page-link page-btn"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div> */}
          </div>
        </div>
        <DuyuruKatil />
      </div>
    </div>
  );
}

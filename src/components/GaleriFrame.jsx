import React from "react";

function GaleriFrame(props) {
  return (
    <div className="hamidi">
      <div className="anaresim col-10" onClick={props.openFunction}>
        <img src={props.resim} alt="galeri" />
        <div id={props.id2} className="content">
          <h4>{props.header}</h4>
          <span>{props.tarih}</span> <br />
          <br />
          <span>{props.laf}</span>
        </div>
      </div>

      <div
        style={{ display: "none" }}
        id={props.id}
        className="carousel slide col-10 galeri-slider"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target={props.target}
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target={props.target}
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target={props.target}
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target={props.target}
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={props.resim1} className="galeri-resim d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={props.resim2} className="galeri-resim d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={props.resim3} className="galeri-resim d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={props.resim4} className="galeri-resim d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={props.target}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={props.target}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default GaleriFrame;

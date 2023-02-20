import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function GaleriFrame(props) {
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);
  if (props.activeImage !== null && props.activeImage !== props.id) {
    return null;
  }
  return (
    <div className="hamidi">
      {props.activeImage === null && (
        <button
          className="anaresim col-10"
          onClick={() => setShowMessage(true)}
        >
          <img src={props.resim} alt="galeri" />
          <div id={props.id2} className="content">
            <h4>{props.header}</h4>
            <span>{props.tarih}</span> <br />
            <br />
          </div>
        </button>
      )}

      <CSSTransition
        in={showMessage}
        nodeRef={nodeRef}
        timeout={300}
        classNames="fade"
        unmountOnExit
        onEnter={() => props.setActiveImage(props.id)}
        onExited={() => props.setActiveImage(null)}
      >
        <div
          className="col-10 galeri-slider"
          ref={nodeRef}
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <button
            className="galeri-btn"
            variant="primary"
            onClick={() => setShowMessage(false)}
          >
            X
          </button>
          <div id={props.id} className="carousel slide " data-bs-ride="true">
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
                <img
                  src={props.resim1}
                  className="galeri-resim d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={props.resim2}
                  className="galeri-resim d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={props.resim3}
                  className="galeri-resim d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={props.resim4}
                  className="galeri-resim d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={props.target}
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
              data-bs-target={props.target}
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
      </CSSTransition>
    </div>
  );
}


function CreateAlbum(yeni) {
  const [activeImage, setActiveImage] = useState(null);
  return (
    <GaleriFrame
      id={yeni.id}
      id2={yeni.id2}
      target={yeni.target}
      resim={yeni.resim}
      header={yeni.header}
      tarih={yeni.tarih}
      resim1={yeni.resim1}
      resim2={yeni.resim2}
      resim3={yeni.resim3}
      resim4={yeni.resim4}
      activeImage={activeImage}
      setActiveImage={setActiveImage}
    />
  );
}

export default CreateAlbum;

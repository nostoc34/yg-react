import React from "react";


function DuyuruFrame(props) {
    return (
      <div>
        <button
          type="button"
          className="duyuru-btn"
          data-bs-toggle="modal"
          data-bs-target={props.target}
        >
          {props.header}
        </button>
  
        <div
          className="modal fade"
          id={props.id}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {props.header}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                  {props.para}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  function createDuyuru(yeni) {
    return (
      <DuyuruFrame
        key={yeni.id}
        id={yeni.id}
        target={yeni.target}
        header={yeni.header}
        para={yeni.para}
      />
    );
  }

  export default createDuyuru;
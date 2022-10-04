import React from "react";
import ReactDOM from "react-dom/client";
import YGlogo from "../img/ygtnavbar.svg";

function Navbar() {
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-light" id="neubar">
        <div className="container">
            <a className="navbar-brand" href="#neubar"><img src={YGlogo} height="60" alt="yg-logo"/> <span style={{fontSize:"25px", fontWeight:"bolder"}}>YAZILIM GELİŞTİRME <br/>
                    TOPLULUĞU</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item">
                        <a className="nav-link mx-2" aria-current="page" href="#neubar">Ana Sayfa</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2" href="#hakkimizda">Hakkımızda</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2" href="#galeri">Galeri</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2" href="#iletisim">İletişim</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2" target="_blank" rel="noreferrer" href="https://forms.gle/zjvPBFNmNASa9VHR9">Bize Katılın</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>);
}

export default Navbar;
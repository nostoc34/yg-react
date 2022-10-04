import React from "react";
import YGlogo from "../img/ygtnavbar.svg";
import KTlogo from "../img/ktunlogo.png";


function Footer() {
    return (<div id="footer">
        <div className="container my-3">
            <div className="row justify-content-evenly">
                <div className="col-12 col-sm-3 ">
                    <ul className="list-unstyled text-center ">
                        <li><a href="#neubar" className="text-decoration-none">ANASAYFA</a></li>
                        <li><a href="#hakkimizda" className="text-decoration-none">HAKKIMIZDA</a></li>
                        <li><a href="#galeri" className="text-decoration-none">GALERİ</a></li>
                        <li><a href="#iletisim" className="text-decoration-none">İLETİŞİM</a></li>
                        <a target="blank" href="https://forms.gle/zjvPBFNmNASa9VHR9" className="text-decoration-none">
                            <div className="border border-2 buton">
                                <li>BİZE KATIL</li>
                            </div>
                        </a>
                    </ul>
                </div>
                <div className="col-12 col-sm-3 text-center">
                    <img src={YGlogo} alt="yazilimgelistirme" classNameName="logo img-fluid rounded-3"/>
                </div>

                <div className="col-12 col-sm-3 text-center">
                    <img src={KTlogo} alt="KTÜN Logo" classNameName="logo"/>
                </div>

                <div className="col-12 col-sm-3 text-center">
                    <h4 className=" mb-3">BİZİ TAKİP EDİN</h4>
                    <ul className="list-unstyled ">
                        <li><a href="https://www.instagram.com/ktun.yazilimgelistirme/?hl=tr" target="_blank" rel="noreferrer"
                                className="text-decoration-none"><i className="bi bi-instagram"></i> @ktun.yazilimgelistirme</a>
                        </li>
                        <li><a href="https://twitter.com/KTUNYazilimGT" target="_blank" rel="noreferrer" className="text-decoration-none"><i
                                    className="bi bi-twitter"></i> @KTUNYazilimGT</a></li>
                        <li><a href="#" className="text-decoration-none"><i className="bi bi-linkedin"></i> yakında...</a></li>
                        <li><a href="#" className="text-decoration-none"><i className="bi bi-discord"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>)
}


export default Footer;
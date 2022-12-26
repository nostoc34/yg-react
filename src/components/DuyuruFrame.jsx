import React from "react";
import codeadipara from "../img/duyuru/codeadipara.jpeg";

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
              <img className="duyuru-img" src={codeadipara} />
              <p>
                Yazılım Geliştirme Topluluğu olarak sponsorumuz NİBGAT ile
                gerçekleştireceğimiz, dönemin son etkinliği ile karşınızdayız.
                <br /> <br />
                Ele alacağımız konular: <br />
                🧐 Developer İmajı <br />
                💸 Yazılım Sektöründe Para Kazanmak <br />
                💡 Yatırım Sermaye ve İş Kurma <br />
                🖥️ Dev. Ops. <br />
                "Nasıl para kazanacağım?, Öğrenciyken nasıl sektöre
                girebilirim?, İş başvurularında nelere dikkat etmeliyim?" gibi
                soruların cevaplarını ve çok daha fazlasını bu etkinlikte
                bulacaksın! <br /><br />
                📆 Tarih : 26 Aralık Pazartesi
                <br />
                🕒 Saat : 15.00
                <br />
                📍 Yer : Halil Cin Konferans Salonu
                <br />
                <a target="_blank" href="https://forms.gle/Bb5Sn4P6dA62trEr7" >Katılım Formu</a> 
              </p>
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

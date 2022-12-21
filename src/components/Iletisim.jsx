import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CSSTransition } from "react-transition-group";

const Iletisim = () => {
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);

  const form = useRef();

  function clearForm() {
    for (var i = 0; i < document.querySelectorAll(".ile-input").length; i++) {
      document.querySelectorAll(".ile-input")[i].value = "";
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p8rp70f",
        "template_qu9g411",
        form.current,
        "dmTs3snTyyjFUMbc7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    clearForm();
  };

  return (
    <section id="iletisim">
      <form ref={form} onSubmit={sendEmail}>
        <div className="container">
          <div className="row iletisim-box">
            <h1 className="title">İLETİŞİM</h1>
            <div className="col-lg-7 col-xs-12">
              <label className="iletisim-item ile-label">
                Soru, Görüş ve Önerileriniz:
              </label>
              <textarea
                className="iletisim-item ile-input mesaj"
                name="message"
              />
            </div>
            <div className="col-lg-4 col-xs-12">
              <label className="iletisim-item ile-label">
                Adınız-Soyadınız:
              </label>
              <input
                className="iletisim-item ile-input"
                type="text"
                name="user_name"
              />
              <label className="iletisim-item ile-label">
                Email Adresiniz:
              </label>
              <input
                className="iletisim-item ile-input"
                type="email"
                name="user_email"
              />
              <input
                onClick={() => setShowMessage(true)}
                className="iletisim-item ile-btn"
                type="submit"
                value="Gönder"
              />
            </div>
            <CSSTransition
              in={showMessage}
              nodeRef={nodeRef}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <h5 ref={nodeRef}>Bizimle iletişime geçtiğiniz için teşekkür ederiz.</h5>
            </CSSTransition>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Iletisim;

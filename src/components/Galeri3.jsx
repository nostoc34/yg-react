import React, { useState, useRef } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import GaleriFrame2 from "./GaleriFrame";
import ct1_1 from "../img/galeri/ct1_1.jpeg";
import ct1_2 from "../img/galeri/ct1_2.jpeg";
import ct1_3 from "../img/galeri/ct1_3.jpeg";
import ct1_4 from "../img/galeri/ct1_4.jpeg";
import ws1_1 from "../img/galeri/ws1_1.jpeg";
import ws1_2 from "../img/galeri/ws1_2.jpeg";
import ws1_3 from "../img/galeri/ws1_3.jpeg";
import ws1_4 from "../img/galeri/ws1_4.jpeg";

function Galeri3() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);
  return (
    <Container style={{ paddingTop: "2rem" }}>
      {showButton && (
        <Button onClick={() => setShowMessage(true)} size="lg">
          Show Message
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        nodeRef={nodeRef}
        timeout={5000}
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div>
          <GaleriFrame2
            id="gale1"
            id2="1gale"
            target="#gale1"
            resim={ct1_1}
            header="Coffee&Talk Etkinliği"
            laf="Bir araya gelmek bir başlangıçtır, birlikte kalmak ilerlemedir ve birlikte çalışmak başarıdır."
            tarih="28 Mayıs 2022"
            resim1={ct1_1}
            resim2={ct1_2}
            resim3={ct1_3}
            resim4={ct1_4}
          />

          <GaleriFrame2
            id="gale2"
            id2="2gale"
            target="#gale2"
            resim={ws1_1}
            header="Android Mobil Uygulama Geliştirme Etkinliği"
            laf="Bir noktadan başka bir noktaya gitmenin en kısa yolu, işin ustasını ziyaret etmekten geçer."
            tarih="23 Mayıs 2022"
            resim1={ws1_1}
            resim2={ws1_2}
            resim3={ws1_3}
            resim4={ws1_4}
          />

          <GaleriFrame2
            id="gale3"
            id2="3gale"
            target="#gale3"
            resim={ct1_1}
            header="Coffee&Talk Etkinliği"
            laf="Bir araya gelmek bir başlangıçtır, birlikte kalmak ilerlemedir ve birlikte çalışmak başarıdır."
            tarih="28 Mayıs 2022"
            resim1={ct1_2}
            resim2={ct1_2}
            resim3={ct1_3}
            resim4={ct1_4}
          />
        </div>
      </CSSTransition>
    </Container>
  );
}
export default Galeri3;

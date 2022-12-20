import React from "react";
import Navbar from "./Navbar";
import Duyurular from "./Duyurular.jsx";
import Hakkımızda from "./Hakkımızda";
import Yonetim from "./Yonetim";
import Footer from "./Footer";
import Galeri from "./Galeri";
// import Galeri2 from "./Galeri2";
// import Galeri3 from "./Galeri3";
import Iletisim from "./Iletisim";

function App() {
  return (
    <div>
    <Navbar/>
    {/* <Banner/> */}
    <Duyurular/>
    <Hakkımızda/>
    <Yonetim/>
    <Galeri/>
    <Iletisim/>
    <Footer />
    </div>
  );
}

export default App;

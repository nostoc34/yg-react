import React from "react";
import Navbar from "./Navbar";
import Duyurular from "./Duyurular.jsx";
import Hakkımızda from "./Hakkımızda";
import Yonetim from "./Yonetim";
import Footer from "./Footer";
import Galeri from "./Galeri";

function App() {
  return (
    <div>
    <Navbar/>
    {/* <Duyurular/> */}
    <Hakkımızda/>
    <Yonetim/>
    {/* <Galeri /> */}
    <Footer />
    </div>
  );
}

export default App;

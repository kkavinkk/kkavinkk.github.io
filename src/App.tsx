//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
//import React from "react";
import Header from "./components/Header";
import Face from "./components/Face";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import videoBg from "../src/assets/Fighter15s.mp4";
import FeatureGallery from "./components/Featured_Gallery";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline
          className="absolute w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
        <Header />
        <Face />
      </div>
      <div className="bg-black">
        <About />
        <Experience />
        <Projects />
        <FeatureGallery />
        <Contact />
      </div>
    </>
  );
}

export default App;

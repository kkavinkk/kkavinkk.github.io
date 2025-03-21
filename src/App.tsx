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
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

{
  /* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
}

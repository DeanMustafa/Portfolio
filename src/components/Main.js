import React from "react";
import Me from "../imgs/nothing.png";
import LightOff from "../imgs/bulb_on_noBack.png";
import Nav from "./Nav";
import Contact from "./Contact";
import Projects from "./Projects";
import "./main.css";

function Main() {
  return (
    <div className="page" id="main">
      <Nav />
      <div className="main">
        <img className="light-on" src={LightOff} alt="Light Image" />
        <h3 className="indicator">Scroll Down</h3>
        <div className="intro">
          <div className="context">
            <span className="hello uniqueText">HELLO!</span>
            <h1>
              I'm <span className="uniqueText">Fakhriddin Mustafaev</span> |{" "}
              <span className="uniqueText">Dean</span>
            </h1>
            <p>Front-End Developer</p>
            <div className="btns">
              <button className="btn first">
                <a className="first" href="#contact">
                  HIRE ME!
                </a>
              </button>
              <button className="btn second">
                <a href="#projects">MY WORKS</a>
              </button>
            </div>
          </div>
          <img src={Me} alt="picture" />
        </div>
      </div>
      <Projects />
      <Contact />
    </div>
  );
}

export default Main;

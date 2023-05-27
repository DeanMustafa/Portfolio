import React from "react";
import "./nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav_1">
        <li>
          <a href="#main" className="logo">
            DEAN
          </a>
        </li>
      </div>
      <div className="nav_2">
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills"> Skills & Contact</a>
        </li>
        <li>
          <a href="FrontendDevResume.pdf" download="FrontendDevResume.pdf">
            Resume
          </a>          
        </li>
      </div>
    </div>
  );
}

export default Nav;

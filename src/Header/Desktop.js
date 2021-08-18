import React from "react";
import logo from "../img/logo.png";
import github from "../svg/github.svg";
import moon from "../svg/moon.svg";
// import sun from "../svg/sun.svg";

const Desktop = () => {
  return (
    <div className="header">
      <div className="menuContainer">
        <div className="logo">
          <img className="h100procent" src={logo} alt="Weather forecast" />
        </div>
        <div className="links">
          <div className="about">
            <span>About</span>
          </div>
          <div className="github">
            <img className="githubSvg" src={github} alt="github" />
          </div>
          <div className="theme">
            <img className="moonlight" src={moon} alt="moonlight" />
            {/* <img className="sunlight" src={sun} alt="sunlight" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop;
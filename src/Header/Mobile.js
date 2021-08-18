import React from "react";
import menu from "./svg/menu.svg";
import moon from "../svg/moon.svg";
// import sun from "../svg/sun.svg";

const Mobile = () => {
  return (
    <div className="header mobile">
      <div className="flexColumn menuContainer mobile">
        <div className="iconHrefs">
          <div className="menu">
            <img className="menuIcon" src={menu} alt="Menu" />
          </div>
          <div className="theme">
            <img className="moonlight" src={moon} alt="moonlight" />
            {/* <img className="sunlight" src={sun} alt="sunlight" /> */}
          </div>
        </div>
        <div className="flexColumn textHrefs displayNone">
          <div className="justifyContentStart home">
            <span>Home</span>
          </div>
          <div className="pt-12 justifyContentStart about">
            <span>About</span>
          </div>
          <div className="pt-12 justifyContentStart github">
            <span>Github</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
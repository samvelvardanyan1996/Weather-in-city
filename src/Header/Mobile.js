import React from "react";

const Mobile = () => {
  return (
    <div className="header mobile">
      <div className="flexColumn menuContainer mobile">
        <div className="iconHrefs">
          <div className="menu">
            <img className="menuIcon" src="../src/svg/menu.svg" alt="Menu" />
          </div>
          <div className="theme">
            <img className="moonlight" src="../src/svg/moon.svg" alt="moonlight" />
            {/* <img className="sunlight" src="../src/svg/sun.svg" alt="sunlight" /> */}
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
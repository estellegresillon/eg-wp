import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "./ColorfulHeroScene.scss";

const ColorfulHeroScene = () => {
  const heroScene = useRef(null);

  return (
    <div ref={heroScene} id="ColorfulHeroScene">
      <nav>
        <div className="logo">
          <div>creative</div>
          <div>developer</div>
        </div>
        <div className="menu">MENU</div>
      </nav>
      <h1>
        <div>Hello, world</div>
      </h1>
      <div className="subtitle">
        This is a hero scene with an animated gradient.
      </div>
      <img className="clock-blue" src="/clock.png" alt="clock blue" />
      <img className="clock-orange" src="/clock1.png" alt="clock orange" />
      <Link to="/" className="button-goback">
        GO BACK
      </Link>
      <div className="copyrights">
        Copyright Estelle Grésillon © 2020 - Terms of use
      </div>
    </div>
  );
};

export default ColorfulHeroScene;

import React, { useRef } from "react";

import "./HeroScene.scss";

const HeroScene = () => {
  const heroScene = useRef(null);

  return (
    <>
      <div ref={heroScene} id="ThreeHeroScene">
        <nav>
          <div className="logo">
            <div>creative</div>
            <div>developer</div>
          </div>
          <div className="menu">MENU</div>
        </nav>
        <h1>
          <div>Front-end developer</div> <div>& designer</div>
        </h1>
        <div className="subtitle">
          ReactJs - Typescript - NextJs - Redux - Websockets
        </div>
        <img
          className="hero-mailbox"
          src="mailboxblue-small.png"
          alt="mailbox"
        />
        <div className="availability">
          <i className="far fa-clock" />
          Available in 2021
        </div>
        <div className="copyrights">
          Copyright Estelle Grésillon © 2020 - Terms of use
        </div>
      </div>
    </>
  );
};

export default HeroScene;

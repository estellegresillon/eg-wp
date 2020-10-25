import React, { useEffect, useRef } from "react";

import "./HeroScene.scss";

const HeroScene = () => {
  const heroScene = useRef(null);
  const whistleRef = useRef(null);
  const gamepadRef = useRef(null);
  const cubeRef = useRef(null);
  const rocketRef = useRef(null);

  const moveSectionElements = (e) => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    whistleRef.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${
      distanceFromMiddleX * -0.1
    },${distanceFromMiddleY * -0.1},0,1)`;

    cubeRef.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${
      distanceFromMiddleX * 0.1
    },${distanceFromMiddleY * 0.1},0,1)`;

    rocketRef.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${
      distanceFromMiddleX * 0.2
    },${distanceFromMiddleY * 0.3},0,1)`;

    gamepadRef.current.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${
      distanceFromMiddleX * -0.06
    },${distanceFromMiddleY * -0.08},0,1)`;
  };

  useEffect(() => {
    const section = heroScene.current;
    section.addEventListener("mousemove", moveSectionElements, false);
    return () =>
      section.removeEventListener("mousemove", moveSectionElements, false);
  }, []);

  return (
    <div ref={heroScene} id="HeroScene">
      <nav>
        <div className="logo">
          <i className="fab fa-angrycreative" />
        </div>
        <div className="menu">
          <p>MENU</p>
          <i className="fas fa-hamburger"></i>
        </div>
      </nav>
      <h1>
        <div>Front-end developer</div> <div>& designer</div>
      </h1>
      <div className="subtitle">
        ReactJs - Typescript - NextJs - Redux - Websockets
      </div>
      <img
        ref={gamepadRef}
        className="hero-gamepad"
        src="gamepad.png"
        alt="gamepad"
      />
      <img
        ref={whistleRef}
        className="hero-whistle"
        src="whistle.png"
        alt="whistle"
      />
      <img ref={cubeRef} className="hero-cube" src="cube.png" alt="cube" />
      <img
        ref={rocketRef}
        className="hero-rocket"
        src="rocket.png"
        alt="rocket"
      />
      <div className="availability">
        <i className="far fa-clock" />
        Available in January 2021
      </div>
    </div>
  );
};

export default HeroScene;

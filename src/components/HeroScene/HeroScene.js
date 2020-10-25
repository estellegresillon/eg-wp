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
    <>
      <div ref={heroScene} id="HeroScene">
        <nav>
          <div className="logo">
            {/* <i className="fab fa-angrycreative" /> */}
            <div>ESTELLE</div>
            <div>GRéSILLON</div>
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
      <div id="about">
        <img src="floppy.png" alt="floppy" className="floppy" />
        <img src="bulb.png" alt="bulb" className="bulb" />
        <div className="girl-wrapper">
          <img src="robot.png" alt="robot" className="robot" />
        </div>
        <div className="about-section">
          <h2>About</h2>
          <div className="intro">
            I am Estelle, a front-end developer and a designer. <br />
            <br />
            With a passion for design and interaction, my goal is to create
            websites and apps with{" "}
            <strong>a high quality design and user experience</strong>.
            <br />
            <br />
            Being both a coder and a designer I have global vision of your
            product and your needs :{" "}
            <strong>I code thinking about the design</strong> and{" "}
            <strong>
              I can provide design counselling knowing what is doable on the
              tech side
            </strong>
            .
            <br />
            <br />
            Always yearning to achieve more, I love participating in new
            projects professionally and personally. Feel free to contact me as
            I'd love to hear about your project !
          </div>
          <div className="contact-button">
            let's get started <i className="fas fa-arrow-right" />
          </div>
        </div>
      </div>
      <div id="skills"></div>
      <div id="works"></div>
      <div id="footer"></div>
    </>
  );
};

export default HeroScene;

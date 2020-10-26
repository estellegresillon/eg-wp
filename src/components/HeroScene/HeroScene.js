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
          Available in 2021
        </div>
        <img
          className="small-stripes"
          src="white_stripes.svg"
          alt="stripe"
          aria-hidden="true"
        />
        <img
          className="big-stripes"
          src="white_stripes.svg"
          alt="stripe"
          aria-hidden="true"
        />
        <div className="dot white-dot-top" />
        <div className="dot white-dot-bottom" />
        <div className="dot white-dot-medium-top" />
        <div className="dot white-dot-medium" />
      </div>
      <div id="about">
        <img
          className="big-stripes"
          src="stripes.svg"
          alt="stripe"
          aria-hidden="true"
        />
        <img
          className="medium-stripes"
          src="stripes.svg"
          alt="stripe"
          aria-hidden="true"
        />
        <div className="dot pink-dot-top" />
        <div className="dot pink-dot-bottom" />
        <div className="dot dark-blue-dot-medium" />
        <div className="dot blue-dot-top" />
        <div className="dot blue-dot-medium" />
        <div className="dot dark-blue-dot-bottom" />
        <img src="floppy.png" alt="floppy" className="floppy" />
        <img src="bulb.png" alt="bulb" className="bulb" />
        <div className="girl-wrapper">
          <img src="robot.png" alt="robot" className="robot" />
        </div>
        <div className="about-section">
          <h2>About</h2>
          <img
            className="small-stripes"
            src="stripes.svg"
            alt="stripe"
            aria-hidden="true"
          />
          <div className="intro">
            I am Estelle, a front-end developer and a designer. <br />
            <br />
            With a passion for code and design, my goal is to create websites
            and apps with{" "}
            <strong>
              a clean code, high quality UI and a compelling user experience
            </strong>
            .
            <br />
            <br />
            Being both a coder and a designer, I can bring a comprehensive
            outlook to your product.{" "}
            <strong>I code thinking about the design</strong>, and{" "}
            <strong>
              I can provide in-depth design guidance, with an understanding of
              the feasibility of the tech side
            </strong>
            .
            <br />
            <br />
            Always yearning to achieve more, I love participating in new
            projects, both professionally and personally. Feel free to contact
            me as I'd love to hear about your project and engage in new
            challenges !
          </div>
          <div className="contact-button">
            let's get started <i className="fas fa-arrow-right" />
          </div>
        </div>
      </div>
      <div id="skills">pro : diamond / perso : folder</div>
      <div id="works">design: paint / code computuer</div>
      <div id="contact">mailbox 3D</div>
      <div id="footer">box</div>
    </>
  );
};

export default HeroScene;

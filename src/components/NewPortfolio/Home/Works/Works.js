import React from "react";

import "./Works.scss";
import Button from "../../common/Button";

const Works = () => (
  <div id="Works">
    <div className="pro-left column">
      <img src="diamond.png" alt="pro" className="diamond" />
      <h3>Freelance missions</h3>
      <p>Check my CV and former missions</p>
      <Button label="check it out" width="110px" />
    </div>
    <div className="perso-right column">
      <img src="folder.png" alt="perso" className="folder" />
      <h3>Personal projects</h3>
      <p>Discover the projects I worked on on my own</p>
      <Button label="check it out" width="110px" />
    </div>
    <img
      className="medium-stripes"
      src="stripes.svg"
      alt="stripe"
      aria-hidden="true"
    />
    <img
      className="small-stripes"
      src="stripes.svg"
      alt="stripe"
      aria-hidden="true"
    />
    <div className="dot pink-dot-top" />
    <div className="dot pink-dot-bottom" />
    <div className="dot blue-dot-top" />
    <div className="dot blue-dot-medium" />
    <div className="dot dark-blue-dot-bottom" />
  </div>
);

export default Works;

import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";
import { FRONT_END_CHALLENGES, WEBSITES } from "utils";
import SocialLinks from "./common/SocialLinks";

const Home = () => (
  <div id="Home">
    <h1>Websites</h1>
    <div className="challenges-list">
      {WEBSITES.map((challenge, i) => (
        <div key={i} className="challenge-item">
          <div className="counter">
            0{i < 9 && "0"}
            {i + 1}
          </div>
          <div className="content">
            <div className="title">{challenge.name}</div>
            <div className="subtitle">{challenge.subtitle}</div>
          </div>
          <div className="see-more">
            {challenge.component ? (
              <Link to={challenge.link}>
                <div className="button">SEE PROJECT</div>
              </Link>
            ) : (
              <a
                href={challenge.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="button">SEE PROJECT</div>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
    <h1>Front-End Challenges</h1>
    <div className="challenges-list">
      {FRONT_END_CHALLENGES.map((challenge, i) => (
        <div key={i} className="challenge-item">
          <div className="counter">
            0{i < 9 && "0"}
            {i + 1}
          </div>
          <div className="content">
            <div className="title">{challenge.name}</div>
            <div className="subtitle">{challenge.subtitle}</div>
          </div>
          <div className="see-more">
            {challenge.component ? (
              <Link to={challenge.link}>
                <div className="button">SEE PROJECT</div>
              </Link>
            ) : (
              <a
                href={challenge.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="button">SEE PROJECT</div>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
    <SocialLinks />
  </div>
);

export default Home;

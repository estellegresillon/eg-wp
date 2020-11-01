import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";
import { FRONT_END_CHALLENGES } from "utils";

const Home = () => (
  <div id="Home">
    <h1>Front-End Challenges</h1>
    <ul className="challenges-list">
      {FRONT_END_CHALLENGES.map((challenge, i) => (
        <li key={i}>
          {challenge.component ? (
            <Link to={challenge.link}>
              {i + 1} / {challenge.name}
            </Link>
          ) : (
            <a href={challenge.link} target="_blank" rel="noopener noreferrer">
              {i + 1} / {challenge.name}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Home;

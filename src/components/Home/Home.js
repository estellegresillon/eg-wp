import React from "react";

import "./Home.scss";
import { FRONT_END_CHALLENGES } from "utils";

const Home = () => (
  <div id="Home">
    <h1>Front-End Challenges</h1>
    <ul className="challenges-list">
      {FRONT_END_CHALLENGES.map((challenge) => (
        <li key={challenge.name}>
          <a href={challenge.link}>{challenge.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Home;

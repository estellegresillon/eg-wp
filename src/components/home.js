import React from "react";

//import "./home.scss";

const Home = () => {
  return (
    <div className="app">
      <h1>hi</h1>
      <a href="/first-challenge" target="_blank" rel="noopener noreferrer">
        First Challenge
        <span aria-label="External link">
          <i aria-hidden="true" className="fas fa-external-link-alt" />
        </span>
      </a>
    </div>
  );
};

export default Home;

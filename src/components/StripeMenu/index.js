import React, { useRef } from "react";

import "./index.scss";
import MenuItem from "./MenuItem";
import { MENU_ITEMS } from "./utils";

const StripeMenu = () => {
  const backgroundRef = useRef(null);
  const navRef = useRef(null);

  return (
    <div className="Stripe-Menu">
      <nav ref={navRef}>
        <div ref={backgroundRef} className="dropdownBackground">
          <span className="arrow"></span>
        </div>

        <ul className="menu-item">
          {MENU_ITEMS.map((item) => (
            <MenuItem
              key={item.name}
              item={item}
              nav={navRef}
              background={backgroundRef}
            />
          ))}
        </ul>
      </nav>
      <div className="left-column">
        <h1>Responsive menu</h1>
        <h2>Made with ReactJs and inspired by Stripe</h2>
        <div className="go-back-button">
          <a href="/">GO BACK</a>
        </div>
      </div>
      <div className="right-column">
        <i className="fas fa-arrow-circle-up" />
        <h3>Hover the three menu items to try it out.</h3>
      </div>
      <img className="buildings" src="smallbuildings.jpg" alt="buildings" />
      <img className="tower" src="smalltower.jpg" alt="tower" />
    </div>
  );
};

export default StripeMenu;

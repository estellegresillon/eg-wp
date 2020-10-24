import React from "react";

import "./CardFrontSide.scss";
import { displayCardNumber, CARD_BACKGROUNDS } from "../utils";

const CardFrontSide = ({
  isCardReversed,
  cardBg,
  isCardNumberFocused,
  cardNumber,
  isNameFocused,
  fullName,
  isDateFocused,
  month,
  year,
}) => {
  return (
    <div
      className="credit-card-front"
      style={{
        transform: isCardReversed ? "rotateY(180deg)" : "none",
        background: CARD_BACKGROUNDS[cardBg],
      }}
    >
      <div className="card-header">
        <img
          className="card-chip"
          src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
          alt="chip"
        />
        <img
          className="card-logo front"
          src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
          alt="visa-logo"
        />
      </div>
      <div className={`cc-front-number ${isCardNumberFocused && "is-focused"}`}>
        {displayCardNumber(cardNumber)}
      </div>
      <div className="cc-front-footer">
        <div
          className={`cc-front-footer-name ${isNameFocused && "is-focused"}`}
        >
          <div className="footer-name-label">Card holder</div>
          <div className="cc-front-name">
            {fullName.length > 0 ? fullName : "FULL NAME"}
          </div>
        </div>
        <div
          className={`cc-front-footer-dates ${isDateFocused && "is-focused"}`}
        >
          <div className="footer-dates-label">Expires</div>
          <div className="cc-front-dates">
            <div className="cc-front-month">
              {month.length > 0 ? month : "MM"}
            </div>
            <div>/</div>
            <div className="cc-front-year">
              {year.length > 0 ? year.substring(2) : "YY"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFrontSide;

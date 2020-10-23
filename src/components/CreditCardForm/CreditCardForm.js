import React, { useState } from "react";
import times from "lodash/times";
// import { Link } from "react-router-dom";

import "./CreditCardForm.scss";

const CreditCardForm = () => {
  const [isCardReversed, setIsCardReversed] = useState(false);
  const [CCV, setCCV] = useState("");

  const handleCCVChange = (value) => {
    if (value.length > 3) {
      return;
    }
    setCCV(value);
  };

  return (
    <div id="Credit-Card-Form">
      <div className="form-container">
        <div className="credit-card-container">
          <div
            className="credit-card-front"
            style={{ transform: isCardReversed ? "rotateY(180deg)" : "none" }}
          >
            front
          </div>
          <div
            className="credit-card-back"
            style={{ transform: isCardReversed ? "none" : "rotateY(180deg)" }}
          >
            {times(CCV.length, () => "*")}
          </div>
        </div>
        <input
          type="number"
          className="ccv-input"
          value={CCV}
          onChange={(e) => handleCCVChange(e.target.value)}
          onFocus={() => setIsCardReversed(true)}
          onBlur={() => setIsCardReversed(false)}
        />
      </div>
    </div>
  );
};

export default CreditCardForm;

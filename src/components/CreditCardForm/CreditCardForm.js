import React, { useState } from "react";

import "./CreditCardForm.scss";
import CardFrontSide from "./CardFrontSide";
import CardBackSide from "./CardBackSide";
import CCFormContainer from "./CCFormContainer";

const CreditCardForm = () => {
  const [isCardReversed, setIsCardReversed] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isDateFocused, setIsDateFocused] = useState(false);
  const [isCardNumberFocused, setIsCardNumberFocused] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [CCV, setCCV] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cardBg, setCardBg] = useState(0);
  const [cardInfos, setCardInfos] = useState({});

  const handleCardInfos = (input, value) => {
    console.log(value);
  };

  return (
    <div id="Credit-Card-Form">
      <div className="form-wrapper">
        <div className="credit-card-container">
          <CardFrontSide
            isCardReversed={isCardReversed}
            cardBg={cardBg}
            isCardNumberFocused={isCardNumberFocused}
            cardNumber={cardNumber}
            isNameFocused={isNameFocused}
            fullName={fullName}
            isDateFocused={isDateFocused}
            month={month}
            year={year}
          />
          <CardBackSide
            isCardReversed={isCardReversed}
            CCV={CCV}
            cardBg={cardBg}
          />
        </div>

        <CCFormContainer
          setIsCardReversed={setIsCardReversed}
          setIsNameFocused={setIsNameFocused}
          setIsDateFocused={setIsDateFocused}
          setIsCardNumberFocused={setIsCardNumberFocused}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          fullName={fullName}
          setFullName={setFullName}
          CCV={CCV}
          setCCV={setCCV}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          cardBg={cardBg}
          setCardBg={setCardBg}
        />
      </div>
    </div>
  );
};

export default CreditCardForm;

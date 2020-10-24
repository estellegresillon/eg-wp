import React from "react";
import { Link } from "react-router-dom";

import "./CCFormContainer.scss";
import { addSpaces, MONTHS, createYears } from "../utils";

const CCFormContainer = ({
  setIsCardReversed,
  setIsNameFocused,
  setIsDateFocused,
  setIsCardNumberFocused,
  cardNumber,
  setCardNumber,
  fullName,
  setFullName,
  CCV,
  setCCV,
  month,
  setMonth,
  year,
  setYear,
  cardBg,
  setCardBg,
}) => {
  return (
    <div className="form-container">
      <input
        id="ccn"
        type="tel"
        inputMode="numeric"
        maxLength="19"
        placeholder="XXXX XXXX XXXX XXXX"
        className="card-number-input"
        value={addSpaces(cardNumber)}
        onChange={(e) => setCardNumber(e.target.value)}
        onFocus={() => setIsCardNumberFocused(true)}
        onBlur={() => setIsCardNumberFocused(false)}
      />
      <input
        type="text"
        maxLength="27"
        placeholder="Full name"
        className="full-name-input"
        value={fullName}
        onFocus={() => setIsNameFocused(true)}
        onBlur={() => setIsNameFocused(false)}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        id="ccv"
        type="tel"
        inputMode="numeric"
        maxLength="3"
        placeholder="XXX"
        className="ccv-input"
        value={CCV}
        onChange={(e) => setCCV(e.target.value)}
        onFocus={() => setIsCardReversed(true)}
        onBlur={() => setIsCardReversed(false)}
      />

      <div className="month-year">
        <label htmlFor="month-select">Month</label>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          onFocus={() => setIsDateFocused(true)}
          onBlur={() => setIsDateFocused(false)}
          name="month"
          id="month-select"
        >
          <option value="">Month</option>
          {MONTHS.map((month) => (
            <option key={month.value} value={month.value}>
              {month.name}
            </option>
          ))}
        </select>
        <label htmlFor="year-select">Year</label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          onFocus={() => setIsDateFocused(true)}
          onBlur={() => setIsDateFocused(false)}
          name="year"
          id="year-select"
        >
          <option value="">Year</option>
          {createYears().map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="cc-form-footer">
        <Link to="/" onClick={() => setCardBg(cardBg === 4 ? 0 : cardBg + 1)}>
          Go back
        </Link>
        <div onClick={() => setCardBg(cardBg === 4 ? 0 : cardBg + 1)}>
          Change card style
        </div>
      </div>
    </div>
  );
};

export default CCFormContainer;

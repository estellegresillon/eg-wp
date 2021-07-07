import React from "react";
import { hydrate, render } from "react-dom";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Route } from "react-router-dom";

import "assets/styles/base.scss";
import Home from "components";
import { FRONT_END_CHALLENGES } from "utils";
import i18n from "locales/i18n-config";
import Menu from "components/common/Menu";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Menu />
      <Route exact path="/" component={Home} />
      {FRONT_END_CHALLENGES.map(
        (challenge) =>
          challenge.component && (
            <Route
              exact
              path={challenge.link}
              component={challenge.component}
              key={challenge.name}
            />
          )
      )}
    </React.Fragment>
  </BrowserRouter>
);

console.log("hi");

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>,
    rootElement
  );
} else {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>,
    rootElement
  );
}

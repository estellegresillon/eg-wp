import React from "react";
import { hydrate, render } from "react-dom";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/home";
import FirstChallenge from "./components/FirstChallenge";
import i18n from "./locales/i18n-config";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/first-challenge" component={FirstChallenge} />
    </React.Fragment>
  </BrowserRouter>
);

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

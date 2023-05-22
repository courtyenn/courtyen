import singleSpaReact from "single-spa-react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { registerApplication, start } from "single-spa";

const app = singleSpaReact({
  React,
  ReactDOMClient: ReactDOM,
  rootComponent: App,
  domElementGetter() {
    // Otherwise single-spa will generate it's own root node.
    return document.getElementById('root')!
  }
});

registerApplication({
  name: 'courtyen-ui',
  app,
  activeWhen: ['/'],
});

start();
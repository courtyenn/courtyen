import singleSpaReact from "single-spa-react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { registerApplication, start } from "single-spa";

const app = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
});

registerApplication({
  name: 'courtyen',
  app,
  activeWhen: ['/']
});

start();
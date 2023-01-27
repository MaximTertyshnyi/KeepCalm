import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
import { HomeScreen } from "./HomeScreen";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomeScreen />
  </React.StrictMode>
);

reportWebVitals();

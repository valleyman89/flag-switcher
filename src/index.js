import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CountryProvider } from "./context/countryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CountryProvider>
      <App />
    </CountryProvider>
  </React.StrictMode>
);

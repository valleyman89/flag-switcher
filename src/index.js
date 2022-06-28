import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountryProvider } from "./context/countryContext";
import App from "./App";
import Country from "./routes/Country";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CountryProvider>
      <Routes>
        <Route path="/flag-switcher/" element={<App />} />
        <Route path="/flag-switcher/country" element={<App />} />
        <Route
          path="/flag-switcher/country/:countryCode"
          element={<Country />}
        />
      </Routes>
    </CountryProvider>
  </BrowserRouter>
);

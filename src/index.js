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
        <Route path="/" element={<App />} />
        <Route path="/country" element={<App />} />
        <Route path="/country/:countryCode" element={<Country />} />
      </Routes>
    </CountryProvider>
  </BrowserRouter>
);

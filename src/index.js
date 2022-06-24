import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountryProvider } from "./context/countryContext";
import { Navbar, Container } from "react-bootstrap";
import App from "./App";
import Country from "./routes/Country";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CountryProvider>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand>
              <h1>Where in the world?</h1>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>Dark Mode</Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/country/:countryCode" element={<Country />} />
        </Routes>
      </CountryProvider>
    </BrowserRouter>
  </React.StrictMode>
);

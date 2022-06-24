import React, { useState, createContext } from "react";
import { getCountries } from "../services/data";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countryData, setCountryData] = useState(getCountries());
  return (
    <CountryContext.Provider value={{ countryData, setCountryData }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  return React.useContext(CountryContext);
};

import React, { useEffect, useState, createContext } from "react";

// Context
export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setCountryData(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <CountryContext.Provider value={{ countryData, setCountryData }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  return React.useContext(CountryContext);
};

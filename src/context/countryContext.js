import React, { useState, createContext, useEffect } from "react";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        let dataToJson = await response.json();
        setCountries(dataToJson);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  function allCountries() {
    return countries;
  }

  function singleCountry(code) {
    return countries.find((country) => country.cca3 === code);
  }

  function filterCountries(region) {
    console.log("countryContext.jsx\nBEFORE\n", countries);
    return countries.filter((country) => country.region === region);
  }

  function searchCountry(searchText) {
    return countries.filter((country) => country.name.common === searchText);
  }

  return (
    <CountryContext.Provider
      value={{
        loading,
        countries,
        setCountries,
        allCountries,
        singleCountry,
        filterCountries,
        searchCountry,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  return React.useContext(CountryContext);
};

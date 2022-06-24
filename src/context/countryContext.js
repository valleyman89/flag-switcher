import React, { useState, createContext, useEffect } from "react";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setCountries(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setCountries(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  function getCountries() {
    return countries;
  }

  function getCountry(code) {
    return countries.find((country) => country.cca3 === code);
  }

  function filterCountries(region) {
    return countries.filter((country) => country.region === region);
  }

  function searchCountry(searchText) {
    return countries.filter((country) => country.name.common === searchText);
  }

  return (
    <CountryContext.Provider
      value={{
        error,
        loading,
        countries,
        setCountries,
        getCountries,
        getCountry,
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

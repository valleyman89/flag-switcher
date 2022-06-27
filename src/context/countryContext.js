import React, { useState, createContext, useEffect } from "react";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  function singleCountry(code) {
    return countries.find((country) => country.cca3 === code);
  }

  function resetCountries() {
    setFilter();
    setSearch();
  }

  function capitalise(string) {
    const searchWords = string.split(" ");

    return searchWords
      .map((searchWord) => {
        return searchWord[0].toUpperCase() + searchWord.substring(1);
      })
      .join(" ");
  }

  return (
    <CountryContext.Provider
      value={{
        capitalise,
        countries,
        filter,
        loading,
        resetCountries,
        search,
        setCountries,
        setFilter,
        setSearch,
        singleCountry,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  return React.useContext(CountryContext);
};

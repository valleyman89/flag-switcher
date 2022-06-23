import React from "react";
import CountryCard from "./common/CountryCard";
import { useCountryContext } from "../context/countryContext";
const Cards = () => {
  const { countryData } = useCountryContext();
  return (
    <div>
      <ul>
        {countryData.map((country, index) => (
          <CountryCard key={index} data={country} />
        ))}
      </ul>
    </div>
  );
};

export default Cards;

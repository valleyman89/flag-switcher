import React from "react";
import CountryCard from "./common/CountryCard";
import { useCountryContext } from "../context/countryContext";
import { Container } from "react-bootstrap";

const Cards = () => {
  const { countryData } = useCountryContext();
  return (
    <Container fluid>
      {countryData.map((country, index) => (
        <CountryCard key={index} data={country} />
      ))}
    </Container>
  );
};

export default Cards;

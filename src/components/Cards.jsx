import { Container, Row } from "react-bootstrap";
import { useCountryContext } from "../context/countryContext";
import CountryCard from "./common/CountryCard";
import React from "react";
import Navigation from "./Navigation";

const Cards = () => {
  const { countries, filter, search } = useCountryContext();
  return (
    <Container fluid>
      <Row>
        {countries &&
          countries
            .filter((country) => {
              return !filter && !search
                ? countries
                : country.region === filter || country.name.common === search;
            })
            .map((country, index) => (
              <CountryCard key={index} data={country} />
            ))}
      </Row>
    </Container>
  );
};

export default Cards;

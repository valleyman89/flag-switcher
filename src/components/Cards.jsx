import React from "react";
import CountryCard from "./common/CountryCard";
import { useCountryContext } from "../context/countryContext";
import { Container, Row } from "react-bootstrap";

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

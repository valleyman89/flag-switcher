import React from "react";
import CountryCard from "./common/CountryCard";
import { useCountryContext } from "../context/countryContext";
import { Container, Row, Alert } from "react-bootstrap";

const Cards = () => {
  const { error, loading, countries } = useCountryContext();
  return (
    <Container fluid>
      <Row>
        {countries &&
          countries.map((country, index) => (
            <CountryCard key={index} data={country} />
          ))}
      </Row>
    </Container>
  );
};

export default Cards;

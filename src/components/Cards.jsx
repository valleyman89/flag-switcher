import React from "react";
import CountryCard from "./common/CountryCard";
import { useCountryContext } from "../context/countryContext";
import { Container, Col, Row } from "react-bootstrap";

const Cards = () => {
  const { countryData } = useCountryContext();
  return (
    <Container fluid>
      <Row>
        {countryData.map((country, index) => (
          <CountryCard key={index} data={country} />
        ))}
      </Row>
    </Container>
  );
};

export default Cards;

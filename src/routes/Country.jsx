import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Container, Row, Col, Button, ListGroup, Card } from "react-bootstrap";

import { useCountryContext } from "../context/countryContext";

export default function Country() {
  const { getCountry } = useCountryContext();
  let params = useParams();
  let country = getCountry(params.countryCode);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Container>
      <Row>
        <Col>
          <Link to="/">
            <Button className="mt-4 mb-4" variant="light">
              Back
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col lg="auto">
          <Card border="light" className="text-left mb-4">
            <Card.Body>
              <Card.Img
                className="mb-4"
                variant="top"
                src={country.flags.png}
                alt={`flag of ${country.name.common}`}
              />
              <Card.Title className="mb-4">{country.name.common}</Card.Title>
              <ListGroup className="mb-4" variant="flush">
                <ListGroup.Item>
                  <strong>Native Name:</strong>{" "}
                  {Object.keys(country.name.nativeName).map(
                    (nativeName, index) => (
                      <span key={index}>{nativeName}</span>
                    )
                  )}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Population:</strong>{" "}
                  {country.population.toLocaleString()}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Region:</strong> {country.region}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Sub-region:</strong> {country.subregion}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Capital:</strong> {country.capital}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Top Level Domain:</strong> {country.tld}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Currencies:</strong>{" "}
                  {Object.keys(country.currencies).map((currency, index) => (
                    <span key={index}>{currency}</span>
                  ))}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Languages:</strong> {/* TODO: seperate by comma */}
                  {Object.keys(country.languages).map((language, index) => (
                    <span key={index}>{language}</span>
                  ))}
                </ListGroup.Item>
              </ListGroup>
              <Card.Title>Border Countries:</Card.Title>
              {country.borders.map((border, index) => (
                <Link key={index} to={`/country/${border}`}>
                  <Button className="m-1 shadow" variant="light">
                    {border}
                  </Button>
                </Link>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

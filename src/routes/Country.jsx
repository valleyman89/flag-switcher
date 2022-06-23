import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Button, ListGroup, Card } from "react-bootstrap";
import { getCountry } from "../services/data";

export default function Country() {
  let params = useParams();
  let country = getCountry(params.countryCode);
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
      <Card border="light" className="text-left">
        <Card.Body>
          <Card.Img
            className="mb-4"
            variant="top"
            src={country.flags.png}
            alt="flag of"
          />
          <Card.Title className="mb-4">{country.name.common}</Card.Title>
          <Card.Text>
            <ListGroup className="mb-4" variant="flush">
              <ListGroup.Item>
                <strong>Native Name:</strong>{" "}
                {Object.keys(country.name.nativeName).map(
                  (nativeName) => nativeName
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
            </ListGroup>
            <ListGroup className="mb-4" variant="flush">
              <ListGroup.Item>
                <strong>Top Level Domain:</strong> {country.tld}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Currencies:</strong>{" "}
                {Object.keys(country.currencies).map((currency) => currency)}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Languages:</strong> {/* TODO: seperate by comma */}
                {Object.keys(country.languages).map((language) => language)}
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
          <Card.Title>Border Countries:</Card.Title>
          {country.borders.map((border, index) => (
            <Link to={`/country/${border}`}>
              <Button key={index} className="m-1 shadow" variant="light">
                {border}
              </Button>
            </Link>
          ))}
        </Card.Body>
      </Card>
    </Container>
  );
}

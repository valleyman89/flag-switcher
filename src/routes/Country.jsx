import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Badge,
  ListGroup,
  Card,
  Alert,
} from "react-bootstrap";

import { useCountryContext } from "../context/countryContext";

export default function Country() {
  const { singleCountry, capitalise } = useCountryContext();

  const params = useParams();
  const country = singleCountry(params.countryCode);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Container>
      {!country ? (
        <Alert variant="info">loading...</Alert>
      ) : (
        <>
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
                  <Card.Title className="mb-4">
                    {country.name.common}
                  </Card.Title>
                  <ListGroup className="mb-4" variant="flush">
                    <ListGroup.Item>
                      <strong>Native Name: </strong>
                      {Object.keys(country.name.nativeName).map(
                        (nativeName, index) => (
                          <span key={index}>{nativeName}</span>
                        )
                      )}
                    </ListGroup.Item>
                    {[
                      "population",
                      "region",
                      "capital",
                      "subregion",
                      "tld",
                    ].map((fact, index) => (
                      <React.Fragment key={index}>
                        {country[fact] ? (
                          <ListGroup.Item>
                            <strong>{capitalise(fact)}: </strong>
                            {fact === "population"
                              ? country[fact].toLocaleString()
                              : country[fact]}
                          </ListGroup.Item>
                        ) : null}
                      </React.Fragment>
                    ))}
                    <ListGroup.Item>
                      <strong>Currencies: </strong>
                      {Object.keys(country.currencies).map(
                        (currency, index) => (
                          <span key={index}>{currency}</span>
                        )
                      )}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Languages: </strong>
                      {Object.keys(country.languages).map((language, index) => (
                        <Badge key={index} pill bg="light" text="dark">
                          {language}
                        </Badge>
                      ))}
                    </ListGroup.Item>
                  </ListGroup>
                  {country.borders ? (
                    <Card.Title>Border Countries: </Card.Title>
                  ) : null}
                  {country.borders &&
                    country.borders.map((border, index) => (
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
        </>
      )}
    </Container>
  );
}

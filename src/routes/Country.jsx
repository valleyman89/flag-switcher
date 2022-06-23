import React, { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  ListGroup,
  Card,
} from "react-bootstrap";

export default function Invoice() {
  let params = useParams();

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
            src="https://flagcdn.com/w320/de.png"
            alt="flag of"
          />
          <Card.Title className="mb-4">{params.countryCode}</Card.Title>
          <Card.Text>
            <ListGroup className="mb-4" variant="flush">
              <ListGroup.Item>
                <strong>Native Name: </strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Population: </strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Region: </strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Sub-region: </strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Capital: </strong>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className="mb-4" variant="flush">
              <ListGroup.Item>
                <strong>Top Level Domain: </strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Currencies: </strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Languages: </strong>
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
          <Card.Title>Border Countries:</Card.Title>
          <Button variant="light">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

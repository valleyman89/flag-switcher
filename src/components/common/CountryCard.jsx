import React from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const CountryCard = ({ data }) => {
  return (
    <>
      <Card className="mt-4" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.flags.png} />
        <Card.Body>
          <Card.Title>{data.name.common}</Card.Title>
          <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Population: </strong>
                {data.population}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Region: </strong>
                {data.region}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Capital: </strong>
                {data.capital}
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CountryCard;

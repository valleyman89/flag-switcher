import React from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const CountryCard = ({ data }) => {
  return (
    <Card className="mb-4 shadow" style={{ width: "18rem" }}>
      <Link to={`/country/${data.cioc}`}>
        <Card.Img
          variant="top"
          src={data.flags.png}
          alt={`flag of ${data.name.common}`}
        />
      </Link>
      <Card.Body>
        <Card.Title>{data.name.common}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Population: </strong>
            {data.population.toLocaleString()}
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
      </Card.Body>
    </Card>
  );
};

export default CountryCard;

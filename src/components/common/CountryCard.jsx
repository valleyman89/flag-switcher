import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCountryContext } from "../../context/countryContext";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";

const CountryCard = ({ data }) => {
  const { capitalise } = useCountryContext();
  return (
    <Col>
      <Card className="mb-4 shadow" style={{ width: "18rem" }}>
        <Link to={`/country/${data.cca3}`}>
          <Card.Img
            variant="top"
            src={data.flags.png}
            alt={`flag of ${data.name.common}`}
          />
        </Link>
        <Card.Body>
          <Card.Title>{data.name.common}</Card.Title>
          <ListGroup variant="flush">
            {["population", "region", "capital"].map((fact, index) => (
              <React.Fragment key={index}>
                {data[fact] ? (
                  <ListGroup.Item key={index}>
                    <strong>{capitalise(fact)}: </strong>
                    {fact === "population"
                      ? data[fact].toLocaleString()
                      : data[fact]}
                  </ListGroup.Item>
                ) : null}
              </React.Fragment>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CountryCard;

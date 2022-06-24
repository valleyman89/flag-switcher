import React from "react";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { Alert, Container, Row, Col } from "react-bootstrap";
import { useCountryContext } from "./context/countryContext";

function App() {
  const { countries, error, loading } = useCountryContext();
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Search />
          </Col>
        </Row>
        <Row>
          <Col>
            <Filter />
          </Col>
        </Row>
        <Row>
          <Col>
            {loading && <Alert variant="info">Loading...</Alert>}
            {error && <Alert variant="danger">{`Error...${error}`}</Alert>}

            {countries.length === 0 ? (
              <Alert variant="warning">No results...</Alert>
            ) : (
              <Cards />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

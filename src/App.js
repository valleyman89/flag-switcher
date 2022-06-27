import React from "react";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { Alert, Container, Row, Col } from "react-bootstrap";
import { useCountryContext } from "./context/countryContext";
import Navigation from "./components/Navigation";

function App() {
  const { loading } = useCountryContext();
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row>
          <Col sm={8}>
            <Search />
          </Col>
          <Col sm={4}>
            <Filter />
          </Col>
        </Row>
        <Row>
          <Col>
            {loading && <Alert variant="info">Loading...</Alert>}
            <Cards />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

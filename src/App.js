import React from "react";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { Navbar, Alert, Container, Row, Col } from "react-bootstrap";
import { useCountryContext } from "./context/countryContext";

function App() {
  const { countries, loading } = useCountryContext();
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">
            <h1>Where in the world?</h1>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Dark Mode</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
            {!loading && countries.length === 0 ? (
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

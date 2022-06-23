import React from "react";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { Navbar, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">Where in the world?</Navbar.Brand>
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
            <Cards />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

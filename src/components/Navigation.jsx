import React from "react";
import { Navbar, Container } from "react-bootstrap";
const Navigation = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/flag-switcher/">
          <h1>Where in the world?</h1>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <s>Dark Mode</s>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

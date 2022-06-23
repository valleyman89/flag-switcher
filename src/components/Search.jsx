import React from "react";
import Form from "react-bootstrap/Form";

const Search = () => {
  return (
    <Form className="mt-3">
      <Form.Group className="mb-3" controlId="formSearchCountry">
        <Form.Control
          size="lg"
          type="search"
          placeholder="Search for a country..."
        />
      </Form.Group>
    </Form>
  );
};

export default Search;

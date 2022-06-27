import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import { useCountryContext } from "../context/countryContext";

const Search = () => {
  const { setSearch, setFilter, capitalise } = useCountryContext();
  const [searchTerm, setSearchTerm] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    return !e.target.value ? (setFilter(), setSearch()) : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter();
    setSearch(capitalise(searchTerm));
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Form.Group className="mb-3" controlId="formSearchCountry">
        <Form.Control
          size="lg"
          type="search"
          placeholder="Search for a country..."
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>
    </Form>
  );
};

export default Search;

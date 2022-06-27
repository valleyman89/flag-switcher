import { useCountryContext } from "../context/countryContext";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

const Search = () => {
  const { capitalise, setFilter, setSearch } = useCountryContext();
  const [searchTerm, setSearchTerm] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    return !e.target.value ? (setFilter(), setSearch()) : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter();
    const sanitisedSearchTerm = searchTerm.toLowerCase();
    setSearch(capitalise(sanitisedSearchTerm));
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

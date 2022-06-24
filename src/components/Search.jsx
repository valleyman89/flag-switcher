import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import { useCountryContext } from "../context/countryContext";

const Search = () => {
  const { setCountries, searchCountry, getCountries } = useCountryContext();
  const [searchTerm, setSearchTerm] = useState([]);

  const capitalise = (string) => {
    return string && string[0].toUpperCase() + string.slice(1);
  };

  const setField = (inputValue) => {
    !inputValue
      ? setCountries(getCountries)
      : setSearchTerm(capitalise(inputValue));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCountries(searchCountry(searchTerm));
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Form.Group className="mb-3" controlId="formSearchCountry">
        <Form.Control
          size="lg"
          type="search"
          placeholder="Search for a country..."
          onChange={(e) => setField(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default Search;

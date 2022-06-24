import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { searchCountry } from "../services/data";
import { useCountryContext } from "../context/countryContext";

const Search = () => {
  const { setCountryData } = useCountryContext();

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({ ...form, [field]: value });
    if (!!errors[field]) setErrors({ ...errors, [field]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    console.log(searchCountry(form.country));
    // setCountryData(searchCountry(form.country));
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Form.Group className="mb-3" controlId="formSearchCountry">
        <Form.Control
          size="lg"
          type="search"
          placeholder="Search for a country..."
          onChange={(e) => setField("country", e.target.value)}
          isInvalid={!!errors.country}
        />
        <Form.Control.Feedback type="invalid">
          {errors.country}
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};

export default Search;

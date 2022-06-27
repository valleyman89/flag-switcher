import { useCountryContext } from "../context/countryContext";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";

const Filter = () => {
  const { resetCountries, setFilter, setSearch } = useCountryContext();

  const handleFilter = (e) =>
    e.target.id === "Clear"
      ? resetCountries()
      : (setSearch(), setFilter(e.target.id));

  return (
    <Dropdown className="mt-3 mb-4">
      <Dropdown.Toggle variant="light" size="lg" id="dropdown-basic">
        Filter by Region
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {["Africa", "Asia", "Americas", "Europe", "Oceania"].map((region) => (
          <Dropdown.Item
            as="button"
            id={region}
            key={region}
            onClick={(e) => handleFilter(e)}
          >
            {region}
          </Dropdown.Item>
        ))}
        <Dropdown.Divider />
        <Dropdown.Item as="button" id="Clear" onClick={(e) => handleFilter(e)}>
          Clear
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Filter;

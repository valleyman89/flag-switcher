import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useCountryContext } from "../context/countryContext";

const Filter = () => {
  const { setCountries, filterCountries, allCountries } = useCountryContext();

  const handleFilter = (e) => {
    e.target.id === "Clear"
      ? setCountries(allCountries())
      : setCountries(filterCountries(e.target.id));
    console.log("countryContext.jsx\nAFTER\n", allCountries());
  };

  return (
    <Dropdown className="mb-4">
      <Dropdown.Toggle variant="light" size="lg" id="dropdown-basic">
        Filter by Region
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {["Africa", "Asia", "America", "Europe", "Oceania"].map((region) => (
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

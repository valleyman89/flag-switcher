import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Filter = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="light" size="lg" id="dropdown-basic">
          Filter by Region
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Filter;

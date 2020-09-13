import React from "react";
import Button from "react-bootstrap/Button";
import "./SearchBar.css";
import Form from "react-bootstrap/Form";

const SearchBar = () => {
  return (
    <div className="container" className="container">
      <Form.Group>
        <Form.Control type="text" placeholder="Enter Book Name" />
        <Button variant="primary" className="button-style">Search</Button>
      </Form.Group>
    </div>
  );
};

export default SearchBar;

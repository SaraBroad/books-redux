import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./SearchBar.css";
import Form from "react-bootstrap/Form";

const SearchBar = () => {
  return (
    <div class="container">
      <Form.Group>
        <Form.Control type="text" placeholder="Enter Book Name" />
        <Button variant="primary" className="button-style">Search</Button>
      </Form.Group>
    </div>
  );
};

export default SearchBar;

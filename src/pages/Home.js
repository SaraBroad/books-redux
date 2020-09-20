import React, { useState } from "react";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar/SearchBar.js";
import BookCard from "../components/BookCard/BookCard.js";
import Card from "react-bootstrap/Card";

const style = {
  textAlign: "center",
};

const HomePage = (props) => {
  // const HomePage = ({loading, books, hasErrors}) => {
  return (
    <div>
      <h1 style={style}>Redux Books</h1>
      <div className="container" className="container">
        <Card>
          <Card.Body>
            <Card.Title>Books</Card.Title>
            <Card.Subtitle>Title:</Card.Subtitle>
            <Card.Text>Author:</Card.Text>
          </Card.Body>
        </Card>
      </div>
      {/* <SearchBar />
            <BookCard /> */}
    </div>
  );
};

export default HomePage;

// const mapStateToProps = (state) => ({
//     loading: state.books.loading,
//     books: state.books.books,
//     hasErrors: state.books.hasErrors
// })

// export default connect(mapStateToProps)(HomePage)

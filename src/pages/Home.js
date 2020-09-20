import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar/SearchBar.js";
import BookCard from "../components/BookCard/BookCard.js";
import PropTypes from "prop-types";
import * as actionTypes from "../redux/actions/actionTypes";
import { loadBooks } from "../redux/actions/bookActions";

const style = {
  textAlign: "center",
};

const HomePage = ({ dispatch, loadBooks, loading, books, hasErrors }) => {
  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  const renderBooks = () => {
    // if (loading) return <p>Loading books...</p>
    // if (hasErrors) return <p>Unable to display books.</p>
    return books.map((book) => <BookCard key={book.id} title={book.title} />)
  }

  return (
    <div>
      <h1 style={style}>Redux Books</h1>
      <div className="container" className="container">
      {renderBooks()}
      </div>
      {/* <SearchBar />
      <BookCard /> */}
    </div>
  );
};

HomePage.propTypes = {
    // book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    loadBooks: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
//   book,
  books: state.books,
  // loading: state.books.loading,
  // hasErrors: state.books.hasErrors
});

const mapDispatchToProps = {
    loadBooks
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

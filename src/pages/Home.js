import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import SearchBar from "../components/SearchBar/SearchBar.js";
import BookCard from "../components/BookCard/BookCard.js";
import PropTypes from "prop-types";
import * as actionTypes from "../redux/actions/actionTypes";
import { loadBooks, getBooksSuccess, getBooks, loadBooksFailure } from "../redux/actions/bookActions";

const style = {
  textAlign: "center",
};

const HomePage = () => {
    // const { loadBooks } = props

//   const bookList = useSelector(state => state.bookList)
//   const { data, loading } = bookList
//   const [loadBooks] = useState(false)
  const [data, loading, loadBooksFailure] = useState({ books: [] })
  const dispatch = useDispatch(data)
  
  useEffect(() => {
      dispatch(loadBooks())
    //   return () => {

    //   }
  }, [loadBooks])

//   return (
    return loading ? <div>Loading...</div> :
    // error ? <div>{error}</div> :
    <div>
      <h1 style={style}>Redux Books</h1>
     <ul>
        {data.map(el => {
          <li key={el.userId}>{el.title}</li>
        })} 
    </ul> 
      <div className="container" className="container">
        {/* {renderBooks()} */}
      </div>
      {/* <SearchBar />
      <BookCard /> */}
    </div>
//   );
};

// HomePage.propTypes = {
//     // book: PropTypes.object.isRequired,
//     books: PropTypes.array.isRequired,
//     loadBooks: PropTypes.func.isRequired,
// }

// const mapStateToProps = (state, ownProps) => ({
// //   book,
//   books: state.books,
//   // loading: state.books.loading,
//   // hasErrors: state.books.hasErrors
// });

// const mapDispatchToProps = {
//     loadBooks
// }

export default HomePage
// export default connect(mapDispatchToProps)(HomePage);

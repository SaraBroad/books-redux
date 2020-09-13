import React, { useState } from "react";
import {connect} from 'react-redux'
import SearchBar from '../components/SearchBar/SearchBar.js'
import BookCard from '../components/BookCard/BookCard.js'


const style = {
    textAlign: "center"
}

const HomePage = ({loading, books, hasErrors}) => {
    return (
        <div>
            <h1 style={style}>Redux Books</h1>
            <SearchBar />
            <BookCard />
        </div>
    )
}

const mapStateToProps = (state) => ({
    loading: state.books.loading,
    books: state.books.books,
    hasErrors: state.books.hasErrors
})

export default connect(mapStateToProps)(HomePage)
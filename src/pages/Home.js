import React, { useState } from "react";
import SearchBar from '../components/SearchBar/SearchBar.js'
import BookCard from '../components/BookCard/BookCard.js'


const style = {
    textAlign: "center"
}

function HomePage() {
    return (
        <div>
            <h1 style={style}>Redux Books</h1>
            <SearchBar />
            <BookCard />
        </div>
    )
}

export default HomePage;
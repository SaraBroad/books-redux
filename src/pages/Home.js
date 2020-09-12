import React, { Component } from "react";
import SearchBar from '../components/SearchBar/SearchBar.js'

const style = {
    textAlign: "center"
}

class HomePage extends Component {
    

    render () {
        
        return (
            <div>
                <h1 style={style}>Redux Books</h1>
                <SearchBar />
            </div>
        )
    }
}

export default HomePage;
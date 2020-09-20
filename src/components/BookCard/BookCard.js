import React from "react";
import Card from 'react-bootstrap/Card';

const BookCard = ({book}) => {
    return (
        <div className="container">
            <Card>
                <Card.Body>
                    <Card.Title>Books</Card.Title>
                    <Card.Subtitle>{book.title}</Card.Subtitle>
                    <Card.Text>Text</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BookCard
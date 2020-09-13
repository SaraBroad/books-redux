import React from "react";
import Card from 'react-bootstrap/Card';

const BookCard = ({books}) => {
    return (
        <div className="container">
            <Card>
                <Card.Body>
                    <Card.Title>{books}</Card.Title>
                    <Card.Subtitle>Subtitle</Card.Subtitle>
                    <Card.Text>Text</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BookCard
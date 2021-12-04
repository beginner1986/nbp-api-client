import React from "react";
import {Card} from "react-bootstrap";
import "./Error.css";

export default function Error(props) {
    let errorMessage = "Nie znaleziono strony o wskazanym adresie...";

    if(props.error !== undefined) {
        errorMessage = props.error;
    }

    return (
        <div className="error-card">
            <Card bg="danger" text="white">
                <Card.Header className="error-header">Błąd</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {errorMessage}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
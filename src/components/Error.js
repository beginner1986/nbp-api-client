import React from "react";
import {Card} from "react-bootstrap";
import "./Error.css";

export default function Error(props) {
    return (
        <div className="error-card">
            <Card bg="danger" text="white">
                <Card.Header className="error-header">Nieprawidłowy adres</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Nie znaleziono strony o wskazanym adresie...
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
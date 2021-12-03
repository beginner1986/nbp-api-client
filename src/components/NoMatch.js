import React from "react";
import {Card} from "react-bootstrap";
import "./NoMatch.css";

export default function NoMatch(props) {
    return (
        <div className="no-match-card">
            <Card bg="danger" text="white">
                <Card.Header className="no-match-header">Nieprawidłowy adres</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Nie znaleziono strony o wskazanym adresie...
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
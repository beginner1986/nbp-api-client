import {useEffect, useState} from "react";
import {Card, Spinner} from "react-bootstrap";
import "./Rate.css";
import Error from "./Error";

export default function Gold(props) {
    const [price, setPrice] = useState([]);
    const [date, setDate] = useState("");
    const [error, setError] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
            const url = `https://api.nbp.pl/api/cenyzlota`;

            fetch(url)
                .then(res => res.json())
                .then((res) => {
                        setIsLoaded(true);
                        setPrice(res.at(0).cena);
                        setDate(res.at(0).data);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                );
        }, [props.currency]
    );

    if(error) {
        const errorMessage = `Błąd pobierania kursu ${props.currency}...`;
        return <Error error={errorMessage}/>
    } else if(!isLoaded) {
        return (
            <Spinner animation="border"/>
        );
    } else {
        const d = new Date(date);

        return (
            <main>
                <Card border="primary" className="rate text-center">
                    <Card.Title className="rate-title">Cena złota</Card.Title>
                    <Card.Text>{price} zł/g</Card.Text>
                    <Card.Footer className="rate-footer">{d.getDate()}.{d.getMonth()}.{d.getFullYear()} r.</Card.Footer>
                </Card>
            </main>
        );
    }
}
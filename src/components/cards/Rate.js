import {useEffect, useState} from "react";
import {Card, Spinner} from "react-bootstrap";
import "./Rate.css";
import Error from "./Error";
import {fetchRate} from "../../fetchRate";

export default function Rate(props) {
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [mid, setMid] = useState([]);
    const [date, setDate] = useState("");
    const [error, setError] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetchRate(props.currency)
            .then((res) => {
                    setIsLoaded(true);
                    setMid(res.rates.at(0).mid);
                    setDate(res.rates.at(0).effectiveDate);
                    setName(res.currency);
                    setCode(res.code);
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
        let multiplier = mid < 0.1 ? 100 : 1;
        const d = new Date(date);

        return (
            <Card border="primary" className="rate text-center animate__animated animate__backInUp">
                <Card.Title className="bg-primary bg-gradient text-white">{name.toUpperCase()}</Card.Title>
                <Card.Text>{multiplier} {code}: {(multiplier * mid).toFixed(4)}</Card.Text>
                <Card.Footer className="rate-footer bg-gradient">{d.getDate()}.{d.getMonth()}.{d.getFullYear()} r.</Card.Footer>
            </Card>
        );
    }
}
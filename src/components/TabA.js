import {useEffect, useState} from "react";
import {Spinner, Table} from "react-bootstrap";
import "./TabA.css";
import Error from "./Error";

export default function TabA(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [date, setDate] = useState("");
    const [rates, setRates] = useState([]);

    useEffect(() => {
        const url = "http://api.nbp.pl/api/exchangerates/tables/a/";

        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setIsLoaded(true);
                setDate(data.at(0).effectiveDate);
                setRates(data.at(0).rates);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
        }, []
    );

    let components = rates.map((rate, index) => {
        return (
            <tr key={rate.code}>
                <td>{index + 1}</td>
                <td>{rate.code}</td>
                <td>{rate.currency}</td>
                <td>{rate.mid}</td>
            </tr>);
    });

    if(error) {
        return <Error error="Nie można pobrać tabeli A..."/>
    } else if(!isLoaded) {
        return <Spinner animation="border"/>
    } else {
        return (
            <div className="tab-a">
                <h2>Notowania z dnia {date}:</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Lp.</th>
                            <th>Kod</th>
                            <th>Waluta</th>
                            <th>Kurs średni</th>
                        </tr>
                    </thead>
                    <tbody>
                        {components}
                    </tbody>
                </Table>
            </div>
        );
    }
}
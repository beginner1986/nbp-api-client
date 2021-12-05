import {useEffect, useState} from "react";
import {Spinner, Table} from "react-bootstrap";
import "./Tab.css";
import Error from "./Error";

export default function Tab(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [date, setDate] = useState("");
    const [rates, setRates] = useState([]);

    useEffect(() => {
        const url = `https://api.nbp.pl/api/exchangerates/tables/${props.tab}/`;

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
        }, [props.tab]
    );

    if(error) {
        const errorMessage = `Nie można pobrać tabeli ${props.tab.toUpperCase()}...`;
        return <Error error={errorMessage}/>
    } else if(!isLoaded) {
        return <Spinner animation="border"/>
    } else {
        return (
            <div className="tab">
                <h2>Notowania z dnia {date}:</h2>
                <Table striped bordered hover>
                    <thead>
                        {generateTableHeaders()}
                    </thead>
                    <tbody>
                        {generateTableBody()}
                    </tbody>
                </Table>
            </div>
        );
    }

    function generateTableHeaders() {
        return (
            <tr>
                <th>Lp.</th>
                <th>Kod</th>
                <th>Waluta</th>
                {
                    function() {
                        if(props.tab === "c") {
                            return (
                                <>
                                    <th>Średni kurs zakupu</th>
                                    <th>Średni kurs sprzedaży</th>
                                </>
                            );
                        } else {
                            return <th>Kurs średni</th>;
                        }
                    }()
                }

            </tr>
        );
    }

    function generateTableBody() {
        return rates.map((rate, index) => {
            return (
                <tr key={rate.code}>
                    <td>{index + 1}</td>
                    <td>{rate.code}</td>
                    <td>{rate.currency}</td>
                    {
                        function() {
                            if(props.tab === "c") {
                                return (
                                    <>
                                        <td>{rate.ask}</td>
                                        <td>{rate.bid}</td>
                                    </>
                                );
                            } else {
                                return <td>{rate.mid}</td>;
                            }
                        }()
                    }
                </tr>);
        });
    }
}

import Error from "./Error";
import {Spinner, Table} from "react-bootstrap";

export default function TabView(props) {
    if(props.error) {
        const errorMessage = `Nie można pobrać tabeli ${props.tab.toUpperCase()}...`;
        return <Error error={errorMessage}/>
    } else if(!props.isLoaded) {
        return <Spinner animation="border"/>
    } else {
        return (
            <div className="tab">
                <h2>Notowania z dnia {props.date}:</h2>
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
        return props.rates.map((rate, index) => {
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
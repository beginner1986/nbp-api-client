import Error from "../cards/Error";
import {Spinner, Table} from "react-bootstrap";
import {formatDate} from "../../utils";

export default function TabView(props) {
    if(props.error) {
        const errorMessage = `Nie można pobrać tabeli ${props.tabs.toUpperCase()}...`;
        return <Error error={errorMessage}/>
    } else if(!props.isLoaded) {
        return <Spinner animation="border"/>
    } else {
        return (
            <>
                <h2 className="text-primary text-center">
                    Notowania z dnia {formatDate(props.date)}:
                </h2>
                <Table striped bordered hover className="col-sm-10 animate__animated animate__bounceInLeft">
                    <thead>
                        {generateTableHeaders()}
                    </thead>
                    <tbody>
                        {generateTableBody()}
                    </tbody>
                </Table>
            </>
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
                        if(props.tabs.at(0) === "c") {
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
        if(!props.rates) return;

        return props.rates.map((rate, index) => {
            return (
                <tr key={rate.code}>
                    <td>{index + 1}</td>
                    <td>{rate.code}</td>
                    <td>{rate.currency}</td>
                    {
                        function() {
                            if(props.tabs.at(0) === "c") {
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
                </tr>
            );
        });
    }
}
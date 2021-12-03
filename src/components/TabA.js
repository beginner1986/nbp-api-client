import {useEffect, useState} from "react";

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

    let components = rates.map((rate) => { return (<div key={rate.code}>{rate.mid}</div>)});

    return (
        <div>
            {components}
        </div>
    );
}
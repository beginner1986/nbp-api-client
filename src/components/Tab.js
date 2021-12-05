import {useEffect, useState} from "react";
import "./Tab.css";
import TabView from "./TabView";

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

    return <TabView error={error} isLoaded={isLoaded} date={date} rates={rates} tab={props.tab}/>
}

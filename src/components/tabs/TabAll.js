import {useEffect, useState} from "react";
import TabView from "./TabView";

export default function TabAll(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [date, setDate] = useState("");
    const [rates, setRates] = useState([]);

    useEffect(() => {
            const url = 'https://api.nbp.pl/api/exchangerates/tables/';
            const urls = [url + "a", url + "b"];

            Promise.all(urls.map(u => fetch(u)))
                .then(responses => Promise.all(responses.map(res => res.json()))
                    .then((data) => {
                            data.forEach(d => {
                                setRates(prevState =>  prevState.concat(d.at(0).rates))
                                setDate(d.at(0).effectiveDate);
                            });
                        },
                        (error) => {
                            setError(error);
                        }
                    )
                )
                .then(setIsLoaded(true));
        }, []
    );

    return <TabView error={error} isLoaded={isLoaded} date={date} rates={rates} tab={props.tab}/>
}
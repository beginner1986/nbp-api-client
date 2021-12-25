import {useEffect, useState} from "react";
import TabView from "./TabView";
import {useSearchParams} from "react-router-dom";

export default function Tab(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState("");
    const [date, setDate] = useState("");
    const [rates, setRates] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const url = 'https://api.nbp.pl/api/exchangerates/tables/';
        let urls = [];
        if(props.tabs) {
            props.tabs.forEach(tab => urls.push(url.concat(tab)))
        } else {
            urls = [url + "a", url + "b"];
        }

        setRates([]);
        setIsLoaded(false);

        const resultsFilter = searchParams.get("value");
        function filterRates(rate) {
            return (
                rate.code.toLowerCase().includes(resultsFilter.toLowerCase()) ||
                rate.currency.toLowerCase().includes(resultsFilter.toLowerCase())
            );
        };

        Promise.all(urls.map(u => fetch(u)))
            .then(responses => Promise.all(responses.map(res => res.json()))
                .then((data) => {
                        data.forEach(d => {
                            setRates(prevState => prevState.concat(d.at(0).rates))
                            setDate(d.at(0).effectiveDate);
                        });
                    },
                    (error) => {
                        setError(error);
                    }
                )
            )
            .then(() => setRates(prevState => prevState.sort((a, b) => a.code > b.code ? 1 : -1)))
            .then(() => {
                if(resultsFilter) {
                    setRates(prevState => prevState.filter(filterRates));
                }
            })
            .then(() => setIsLoaded(true));
        }, [props.tabs, searchParams, setSearchParams]
    );

    return <TabView error={error} isLoaded={isLoaded} date={date} rates={rates} tabs={props.tabs}/>
}
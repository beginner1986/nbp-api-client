import {useEffect, useState} from "react";

export default function Rate(props) {
    const [rate, setRate] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const url = `https://api.nbp.pl/api/exchangerates/rates/a/${props.currency}?format=json`;

        fetch(url)
            .then(res => res.json())
            .then((res) => {
                    setIsLoaded(true);
                    setRate(res.rates.at(0));
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, [props.currency]);

    if(error) {
        return <div>Error: {error}</div>
    } else if(!isLoaded) {
        return <div>Loading...</div>
    } else {
        console.log(rate.mid);

        return (
            <div>{props.currency}: {rate.mid}</div>
        );
    }
}
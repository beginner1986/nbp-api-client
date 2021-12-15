import {useSearchParams} from "react-router-dom";

export default function SearchResults(props) {
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            {searchParams.get("value")}
        </>
    );
}
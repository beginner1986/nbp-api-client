import {useSearchParams} from "react-router-dom";

export default function SearchResults(props) {
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
            {searchParams.get("value")}
        </div>
    );
}
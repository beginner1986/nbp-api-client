import Rate from "./Rate";
import "./MostPopularRates.css";

export default function MostPopularRates(props) {
    return (
        <div className="most-popular">
            <Rate currency="EUR"/>
            <Rate currency="USD"/>
            <Rate currency="CHF"/>
            <Rate currency="GBP"/>
            <Rate currency="JPY"/>
        </div>
    );
}
import Rate from "./Rate";
import "./MostPopularRates.css";

export default function MostPopularRates() {
    return (
        <main className="most-popular">
            <Rate currency="EUR"/>
            <Rate currency="USD"/>
            <Rate currency="CHF"/>
            <Rate currency="GBP"/>
            <Rate currency="JPY"/>
        </main>
    );
}
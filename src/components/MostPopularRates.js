import Rate from "./Rate";

export default function MostPopularRates() {
    return (
        <main>
            <Rate currency="EUR"/>
            <Rate currency="USD"/>
            <Rate currency="CHF"/>
            <Rate currency="GBP"/>
            <Rate currency="JPY"/>
        </main>
    );
}
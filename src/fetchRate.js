
export const fetchRate = (currency) => {
    const url = `https://api.nbp.pl/api/exchangerates/rates/a/${currency}?format=json`;

    return fetch(url).then(res => res.json());
}
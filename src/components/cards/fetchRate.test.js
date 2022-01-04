import {fetchRate} from "./fetchRate";

it("USD rate is being fetched correctly", () => {
    const rate = fetchRate("USD");

    expect(rate.name).toEqual("dolar amerykański");
    expect(rate.code).toEqual("USD");
    expect(rate.mid).toBeDefined();
    expect(rate.date).toBeDefined();
});
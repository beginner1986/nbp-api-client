import React from "react";
import {formatDate} from "./utils";

it('formats date properly', () => {
    let result = formatDate("2022-01-09");
    expect(result).toEqual("09.01.2022 r.")
});
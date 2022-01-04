import React from "react";
import ReactDOM from "react-dom";
import Rate from "./Rate";

it("renders without crushing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Rate/>, div);
});
import React from "react";
import ReactDOM from "react-dom";
import Error from "./Error";

it("renders without crushing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Error/>, div);
});
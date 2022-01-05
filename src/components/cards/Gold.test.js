import React from "react";
import ReactDOM from "react-dom";
import Gold from "./Gold";

it("renders without crushing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Gold/>, div);
});
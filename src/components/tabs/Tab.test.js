import React from "react";
import ReactDOM from "react-dom";
import Tab from "./Tab";
import {MemoryRouter} from "react-router-dom";

it("renders table A without crushing", () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Tab tabs={["a"]}/>
        </MemoryRouter>,
        div);
});

it("renders table A and B without crushing", () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Tab tabs={["a", "b"]}/>
        </MemoryRouter>,
        div);
});

it("renders table C without crushing", () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Tab tabs={["c"]}/>
        </MemoryRouter>,
        div);
});
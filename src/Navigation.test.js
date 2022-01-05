import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation";
import {MemoryRouter} from "react-router-dom";

it('renders without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Navigation/>
        </MemoryRouter>
        , div);
});
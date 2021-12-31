import React from "react";
import ReactDOM from "react-dom";
import {MemoryRouter} from "react-router-dom";
import NavigationBar from "./NavigationBar";

it('renders without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <NavigationBar/>
        </MemoryRouter>,
        div);
});
import React from "react";
import ReactDOM from "react-dom";
import HamburgerMenu from "./HamburgerMenu";
import {MemoryRouter} from "react-router-dom";

it('renders without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <HamburgerMenu/>
        </MemoryRouter>,
        div);
});
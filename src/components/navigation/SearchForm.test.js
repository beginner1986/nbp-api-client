import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "./SearchForm";
import {MemoryRouter} from "react-router-dom";

it('renders without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <SearchForm/>
        </MemoryRouter>
        , div);
});
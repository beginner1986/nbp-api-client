import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Tab from "./components/Tab";
import Gold from "./components/Gold";
import MostPopularRates from "./components/MostPopularRates";
import Error from "./components/Error";
import SearchResults from "./components/SearchResults";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<MostPopularRates/>}/>
                <Route path="/tab-a" element={<Tab tab="a"/>}/>
                <Route path="/tab-b" element={<Tab tab="b"/>}/>
                <Route path="/tab-c" element={<Tab tab="c"/>}/>
                <Route path="/gold" element={<Gold/>}/>
                <Route path="/search" element={<SearchResults/>}/>
                <Route path="*" element={<Error/>}/>
                />
            </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Tab from "./components/Tab";
import All from "./components/All";
import MostPopularRates from "./components/MostPopularRates";
import Error from "./components/Error";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<MostPopularRates/>}/>
                <Route path="/tab-a" element={<Tab tab="a"/>}/>
                <Route path="/tab-b" element={<Tab tab="b"/>}/>
                <Route path="/tab-c" element={<Tab tab="c"/>}/>
                <Route path="/all" element={<All/>}/>
                <Route path="*" element={<Error/>}/>
                />
            </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


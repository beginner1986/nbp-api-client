import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TabA from "./components/TabA";
import TabB from "./components/TabB";
import All from "./components/All";
import MostPopularRates from "./components/MostPopularRates";
import Error from "./components/Error";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route index element={<MostPopularRates/>}/>
                <Route path="/tab-a" element={<TabA/>}/>
                <Route path="/tab-b" element={<TabB/>}/>
                <Route path="/all" element={<All/>}/>
                <Route path="*" element={<Error/>}/>
                />
            </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


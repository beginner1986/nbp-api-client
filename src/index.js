import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TabA from "./components/TabA";
import TabB from "./components/TabB";
import All from "./components/All";
import MostPopularRates from "./components/MostPopularRates";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="most-popular" element={<MostPopularRates/>}/>
                <Route path="/tab-a" element={<TabA/>}/>
                <Route path="/tab-b" element={<TabB/>}/>
                <Route path="/all" element={<All/>}/>
                <Route path="*"
                       element={
                           <main style={{padding: "1rem"}}>
                               <p>Nieprawidłowy adres!</p>
                           </main>
                       }
                />
            </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


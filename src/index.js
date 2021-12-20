import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Navigation from './Navigation';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Tab from "./components/Tab";
import Gold from "./components/cards/Gold";
import MostPopularRates from "./components/MostPopularRates";
import Error from "./components/cards/Error";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import About from "./components/About";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Navigation/>
        <main>
            <Routes>
                <Route index element={<MostPopularRates/>}/>
                <Route path="/tab-a" element={<Tab tab="a"/>}/>
                <Route path="/tab-b" element={<Tab tab="b"/>}/>
                <Route path="/tab-c" element={<Tab tab="c"/>}/>
                <Route path="/gold" element={<Gold/>}/>
                <Route path="/search" element={<SearchResults/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </main>
    </BrowserRouter>
    <Footer/>
</React.StrictMode>,
document.getElementById('root')
);

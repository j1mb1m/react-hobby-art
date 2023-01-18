import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Delivery from "./pages/Delivery";
import About from './pages/About';
import BonusProgramm from './pages/BonusProgramm';
import Refund from './pages/Refund';
import Contacts from './pages/Contacts';
import Catalog from './pages/Catalog';
import CatalogProducts from './pages/CatalogProducts';
import ProductInfo from './pages/ProductInfo';
import Basket from './pages/Basket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/catalog" element={<Catalog />} />
        <Route exact path="/category/:name" element={<CatalogProducts />} />
        <Route exact path="/item/:id" element={<ProductInfo />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/delivery" element={<Delivery />} />
        <Route exact path="/bonus" element={<BonusProgramm />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/refund" element={<Refund />} />   
         <Route exact path="/basket" element={<Basket />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

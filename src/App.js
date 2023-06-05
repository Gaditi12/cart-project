import React from "react";
import Header from "./components/Header";
//import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
//import ProductDetails from "./components/ProductDetails";
import ProductComponents from "./components/ProductComponents";
import Home from "./components/Home";
import Item from "./components/Item";
import Cart from "./components/Cart";
export default function App() {
  return (
    <>
      <div>
        <Router>
          <Header />

          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/products" Component={ProductComponents} />
            <Route path="/products/:id" Component={Item} />
            <Route path="/cart" Component={Cart} />
            <Route>Path not found !</Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

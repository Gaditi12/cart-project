import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
export default function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" Component={ProductList} />
            <Route path="/product/:productID" Component={ProductDetails} />
            <Route>Path not found !</Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

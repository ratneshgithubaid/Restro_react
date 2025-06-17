import React from "react";
import "./App.css";
import Home from "./Home";
import AddSeller from "./AddSeller";
import Login from "./Login";
import Product from "./Product";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex justify-center items-center gap-[12rem] bg-slate-400 h-12 ">
        <h1>Zomato</h1>

        <Link to="/" className="text-slate-100">
          Home
        </Link>
        <Link to="/product" className="text-slate-100">
          Products
        </Link>
        <Link to="/addseller" className="text-slate-100">
          Add Seller
        </Link>
        <Link to="/login" className="text-slate-100">
          Login/Signup
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/addseller" element={<AddSeller />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

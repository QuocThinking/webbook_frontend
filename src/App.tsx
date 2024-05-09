/** @format */

import React, { useState } from "react";

import "./App.css";
import Navbar from "./layouts/header/navbar/navbar";
import Footer from "./layouts/footer/footer";
import { HomePage } from "./layouts/hompage/HomePage";
import { getAllBooks } from "./api/SachApi";
import Header from "./layouts/header/Header";

function App()
{

  const [name, setName] = useState('');

  return (
    <div className="App">
      <Header name={name} setName={setName} />
      <HomePage name={name} />
      <Footer />
    </div>
  );
}

export default App;

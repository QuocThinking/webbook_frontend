/** @format */

import React, { useState } from "react";

import "./App.css";

import Footer from "./layouts/footer/footer";
import { HomePage } from "./layouts/hompage/HomePage";

import Header from "./layouts/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./layouts/About/about";
import Bodiect from "./Bodiect";
import ProductDetails from "./layouts/product/components/ProductDetails";
import AccountRegistration from "./layouts/User/AccountRegistration";
import ActiveAccount from "./layouts/User/ActiveAccount";
import Login from "./layouts/User/Login";
import TestLogin from "./layouts/User/TestLogin";
import BookForm from "./layouts/admin/BookForm";


function App()
{

  const [name, setName] = useState('');
  const [tem, setTempSearch] = useState('');

  const handleChane = () =>
  {
    setName(name);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header name={name} setName={setName} />
        <Routes>
          <Route path="/" element={<HomePage name={name} />} ></Route>
          <Route path="/sach" element={<HomePage name={name} />} ></Route>
          <Route path="/home" element={<HomePage name={name} />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/:maTheLoai" element={<HomePage name={name} />} ></Route>
          <Route path="/sach/:maSach" element={<ProductDetails />} ></Route>
          <Route path="/dang-ky" element={<AccountRegistration />} ></Route>
          <Route path="/kich-hoat/:email/:maKichHoat" element={<ActiveAccount />}></Route>
          <Route path="/dang-nhap" element={<Login />}></Route>
          <Route path="/test" element={<TestLogin />}></Route>
          <Route path="/admin/bookform" element={<BookForm />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;

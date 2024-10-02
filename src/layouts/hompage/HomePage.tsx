import React, { useEffect, useState } from "react";


import './../../layouts/general.css'

import PageListProduct from "../product/PageListProduct";
import Carousel from "./components/carousel/Carousel";
import { useParams } from "react-router-dom";

interface HomePageInterface
{
    name: string;
}

export function HomePage({ name }: HomePageInterface)
{

    // vidu unmouting
    const [show, setShow] = useState(true);
    const [count, setCount] = useState(0);
    const handleShow = () =>
    {
        setShow(!show)
    }

    const increaseCount = () =>
    {
        setCount(count + 1)
    }

    // useEffect(() =>
    // {
    //     console.log("App render ")
    // }, [count, show])

    const { maTheLoai } = useParams();
    let maTheloaiNumber = maTheLoai ? parseInt(maTheLoai) : 0

    try
    {
        maTheloaiNumber = parseInt(maTheLoai + '')
    } catch (err)
    {
        maTheloaiNumber = 0;
        console.error(err);
    }
    if (Number.isNaN(maTheloaiNumber))
    {
        maTheloaiNumber = 0
    }
    return (
        <div >
            <Carousel />
            {/* <List /> */}
            {/* <h1>Gia tri count : {count}</h1>
            <button onClick={increaseCount}>Click count</button>

            <h1>Gia tri show : {show.toString()}</h1>
            <button onClick={handleShow}>Click</button> */}
            {show && <PageListProduct name={name} maTheLoai={maTheloaiNumber} />}

        </div>
    )
}
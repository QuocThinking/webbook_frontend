import React from "react";

import List from "../product/List";
import './../../layouts/general.css'

import PageListProduct from "../product/PageListProduct";
import Carousel from "./components/carousel/Carousel";

interface HomePageInterface
{
    name: string;
}

export function HomePage({ name }: HomePageInterface)
{
    return (
        <div >
            <Carousel />
            {/* <List /> */}
            <PageListProduct name={name} />
        </div>
    )
}
import React, { useEffect, useState } from "react";
import Navbar from "./navbar/navbar";
import { Banner } from "./banner/Banner";

interface HeaderInterface
{
    name: string;
    setName(name: string): void;
}

function Header({ name, setName }: HeaderInterface)
{


    return (
        <div className="header">
            <Navbar name={name} setName={setName} />
            <Banner />
        </div>
    )
}

export default Header;

import React from "react";


interface BodiInterface
{

    temp: number;
}
function Bodiect({ temp }: BodiInterface)
{

    if (temp >= 100)
    {
        return <p>The water would boil.</p>;
    } else
    {
        return <p>The water would not boil.</p>;
    }
}

export default Bodiect;
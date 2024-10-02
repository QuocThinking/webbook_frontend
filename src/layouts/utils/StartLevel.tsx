import React from "react";
import { Star, StarFill } from "react-bootstrap-icons";

const renderRating = (diem: number) =>
{
    const start = [];
    for (let i = 1; i <= 5; i++)
    {
        if (i < diem)
        {
            start.push(<StarFill className="text-warning" style={{ height: "15px" }} />)
        } else
        {
            start.push(<Star className="text-secondary" style={{ height: "15px" }} />)
        }
    }
    return start;
}

export default renderRating;
import React from "react";

export function formatingNumber(value: number | undefined)
{
    if (value === undefined)
    {
        return 0;
    }
    if (isNaN(value))
    {
        return 0;
    }
    return value.toLocaleString("vi-VN");
}
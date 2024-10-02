import React from "react";
import { request } from "./Request";
import HinhAnhModel from "../models/HinhAnhModel";

export async function getImageByBook(url: string): Promise<HinhAnhModel[]>
{
    const result: HinhAnhModel[] = [];
    // Call method request
    const response = await request(url) // return promise

    // get all books (JSON response)
    const responseData = response._embedded.hinhAnhs;
    // console.log(responseData)

    for (const key in responseData)
    {
        result.push({
            maHinhAnh: responseData[key].maHinhAnh,
            tenHinhAnh: responseData[key].tenHinhAnh,
            isIcon: responseData[key].isIcon,
            duongDan: responseData[key].duongDan,
            duLieuAnh: responseData[key].duLieuAnh,
        })

    }
    return result;
}
// return a Promise containing an array of SachModel objects.
export async function getAllImageByBook(maSach: number): Promise<HinhAnhModel[]>
{
    const url: string = `http://localhost:8080/api/v1/sach/${maSach}/danhSachHinhAnh`;
    return getImageByBook(url)
}

export async function getOnetImageOfBook(maSach: number): Promise<HinhAnhModel[]>
{
    const url: string = `http://localhost:8080/api/v1/sach/${maSach}/danhSachHinhAnh?sort=maHinhAnh,asc&page=0&size=1`;
    return getImageByBook(url)
}
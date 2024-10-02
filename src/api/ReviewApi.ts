import React from "react";
import { request } from "./Request";
import ReviewModel from "../models/ReviewModel";


export async function getReviewByBook(url: string): Promise<ReviewModel[]>
{
    const result: ReviewModel[] = [];
    // Call method request
    const response = await request(url) // return promise

    // get all books (JSON response)
    const responseData = response._embedded.suDanhGias;
    // console.log(responseData)

    for (const key in responseData)
    {
        result.push({
            maDanhGia: responseData[key].maDanhGia,
            diemXepHang: responseData[key].diemXepHang,
            nhanXet: responseData[key].nhanXet,

        })

    }
    return result;
}
// return a Promise containing an array of SachModel objects.
export async function getAllReviewByBook(maSach: number): Promise<ReviewModel[]>
{
    const url: string = `http://localhost:8080/api/v1/sach/${maSach}/suDanhGia`;
    return getReviewByBook(url)
}

export async function getOneReviewOfBook(maSach: number): Promise<ReviewModel[]>
{
    const url: string = `http://localhost:8080/api/v1/sach/${maSach}/suDanhGia?sort=maHinhAnh,asc&page=0&size=1`;
    return getReviewByBook(url)
}
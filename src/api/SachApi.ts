import React from "react";
import SachModel from "../models/SachModel";
import { request } from "./Request";
import HinhAnhModel from "../models/HinhAnhModel";


interface PaginationInterface
{
    ketQua: SachModel[];
    tongSoTrang: number;
    tongSoSach: number
}

async function getBooks(endpoint: string): Promise<PaginationInterface> 
{
    const result: SachModel[] = [];


    // Call method request
    const response = await request(endpoint) // return promise
    // console.log('Call api get all books', response)
    // get all books (JSON response)
    const responseData = response._embedded.saches;

    // get info page
    const totalPages: number = response.page.totalPages;
    // console.log("Tong so trang", totalPages)
    const totalElements: number = response.page.totalElements;

    for (const key in responseData)
    {
        result.push({
            maSach: responseData[key].maSach,
            tenSach: responseData[key].tenSach,
            giaBan: responseData[key].giaBan,
            giaNiemYet: responseData[key].giaNiemYet,
            moTa: responseData[key].moTa,
            soLuong: responseData[key].soLuong,
            tenTacGia: responseData[key].tenTacGia,
            trungBinhXepHang: responseData[key].trungBinhXepHang,
        })

    }
    return { ketQua: result, tongSoSach: totalElements, tongSoTrang: totalPages };
}

// return a Promise containing an array of SachModel objects.
export async function getAllBooks(currentPage: number): Promise<PaginationInterface>
{
    const url: string = `http://localhost:8080/api/v1/sach?sort=maSach,desc&size=8&page=${currentPage}`;
    return getBooks(url)
}
export async function getNewBook(): Promise<PaginationInterface>
{

    const url: string = `http://localhost:8080/api/v1/sach?sort=maSach,desc&page=0&size=3`
    return getBooks(url);

}

export default function findSachByName(name: string, maTheLoai: number): Promise<PaginationInterface>
{
    let url: string = `http://localhost:8080/api/v1/sach?sort=maSach,desc&size=8&page=0`;
    if (name !== '' && maTheLoai === 0)
    {
        url = `http://localhost:8080/api/v1/sach/search/findByTenSachContaining?sort=maSach,desc&size=8&page=0&tenSach=${name}`
    } else if (name === '' && maTheLoai > 0)
    {
        url = `http://localhost:8080/api/v1/sach/search/findByDanhSachTheLoai_MaTheLoai?sort=maSach,desc&size=8&page=0&maTheLoai=${maTheLoai}`
    } else if (name !== '' && maTheLoai > 0)
    {
        url = `http://localhost:8080/api/v1/sach/search/findByTenSachContainingAndDanhSachTheLoai_MaTheLoai?sort=maSach,desc&size=8&page=0&maTheLoai=${maTheLoai}&tenSach=${name}`
    }
    return getBooks(url);
}

export async function getBookById(maSach: number): Promise<SachModel | null>
{
    let result: SachModel;

    const url = `http://localhost:8080/api/v1/sach/${maSach}`

    try
    {
        // Call method request
        const response = await fetch(url) // return promise
        // console.log('Call api get all books', response)
        // get all books (JSON response)


        if (!response.ok)
        {
            throw new Error("Call Api Failed");
        }

        const bookData = await response.json();

        if (bookData)
        {
            return {
                maSach: bookData.maSach,
                tenSach: bookData.tenSach,
                giaBan: bookData.giaBan,
                giaNiemYet: bookData.giaNiemYet,
                moTa: bookData.moTa,
                soLuong: bookData.soLuong,
                tenTacGia: bookData.tenTacGia,
                trungBinhXepHang: bookData.trungBinhXepHang,
            }

        } else
        {
            throw new Error("Call api failed");
        }

    } catch (err)
    {
        console.log("Error: ", err);
        return null;
    }

}
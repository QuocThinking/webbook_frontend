import React, { useEffect, useState } from "react";
import SachModel from "../../../models/SachModel";
import { Book } from "../../../models/Book";
import HinhAnhModel from "../../../models/HinhAnhModel";

import '../../product/components/load.css'
import { getAllImageByBook, getOnetImageOfBook } from "../../../api/HinhAnhApi";

interface SachModelInterFace
{
    book: SachModel
}
const LoadProduct: React.FC<SachModelInterFace> = ({ book }) =>
{

    const [danhSachAnh, setDanhSachAnh] = useState<HinhAnhModel[]>([])
    const [loadingData, setLoadingData] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() =>
    {
        setLoadingData(true);
        const fetchData = async () =>
        {
            setTimeout(async () =>
            {
                try
                {
                    const dataAnh = await getOnetImageOfBook(book.maSach) // return a array contain object images
                    setDanhSachAnh(dataAnh)

                } catch (error)
                {
                    console.error('Error fetching data: ' + error);
                } finally
                {
                    setLoadingData(false);
                }
            }, 0);

        }

        fetchData()
    }, [book.maSach])



    let dataAnh: string = '';
    if (danhSachAnh[0] && danhSachAnh[0].duLieuAnh)
    {
        dataAnh = danhSachAnh[0].duLieuAnh
    }

    return (
        <div className='col-md-3 mt-2'>
            {loadingData ? (
                <div className="">
                    <div className=""></div>
                </div>
            ) : error ? (
                <div>
                    <h1>You have error : {error}</h1>
                </div>
            ) : (
                <>
                    <div className='card'>
                        <div className="card-img">
                            <img src={dataAnh} className='card-img-top'
                                alt={book.tenSach} style={{ height: '200px', width: '150px' }}></img>
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>{book.tenSach}</h5>
                            <p className='card-text'>{book.moTa}</p>
                            <div className='price'>
                                <span className='original-price'>
                                    <del>{book.giaNiemYet}</del>
                                </span>
                                <span>&rarr;</span>
                                <span className='discounted-price'>
                                    <strong>{book.giaBan}</strong>
                                </span>
                            </div>
                            <div className='row mt-2' role='group'>
                                <div className='col-6'>
                                    <a href='#' className='btn btn-secondary btn-block'>
                                        <i className='fas fa-heart'></i>
                                    </a>
                                </div>
                                <div className='col-6'>
                                    <button className='btn btn-danger btn-block'>
                                        <i className='fas fa-shopping-cart'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}
export default LoadProduct;
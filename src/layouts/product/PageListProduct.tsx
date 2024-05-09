import React, { useEffect, useState } from "react";
import SachModel from "../../models/SachModel";
import LoadProduct from "./components/LoadProduct";
import '../product/style.css'
import findSachByName, { getAllBooks } from "../../api/SachApi";
import Pagination from "../utils/Pagination";

interface PageListInterface
{
    name: string;
}

function PageListProduct({ name }: PageListInterface)
{

    const [listBooks, setListBooks] = useState<SachModel[]>([])
    const [loadingData, setLoadingData] = useState(false);
    const [error, setError] = useState(null)
    const [trangHienTai, setTrangHienTai] = useState(1)
    const [tongSoTrang, setTongSoTrang] = useState(0);
    const [tongSoSach, setTongSoSach] = useState(0);
    useEffect(() =>
    {
        setLoadingData(true)
        setTimeout(() =>
        {

            if (name === '')
            {
                getAllBooks(trangHienTai - 1)
                    .then(
                        data =>
                        {
                            setListBooks(data.ketQua);
                            setTongSoTrang(data.tongSoTrang)
                            setLoadingData(false)

                        }

                    )
                    .catch(
                        error =>
                        {
                            setError(error.message)
                        }
                    )
            } else
            {
                findSachByName(name).then(
                    data =>
                    {
                        setListBooks(data.ketQua);
                        setTongSoTrang(data.tongSoTrang)
                        setLoadingData(false)

                    }

                )
                    .catch(
                        error =>
                        {
                            setError(error.message)
                        }
                    )
            }
        }, 500)


    }, [trangHienTai, name])


    const PhanTrang = (trang: number) =>
    {
        setTrangHienTai(trang)
    }

    // if (loadingData)
    // {
    //     return (
    //         <div className="load-data">
    //             <h2>{loadingText}</h2>
    //         </div>
    //     )
    // }
    // if (error)
    // {
    //     return (
    //         <div>
    //             <h1>You have error : {error}</h1>
    //         </div>
    //     )
    // }
    return (

        <div className="container list-product" >
            {loadingData ? (
                <div className="spinner">
                    <div className="loader-s">
                    </div>
                </div>

            ) : error ? (
                <div>
                    <h1>You have error : {error}</h1>
                </div>
            ) : (
                <>

                    {listBooks.length === 0 ? (
                        <div className="d-flex justify-content-center">
                            <h1>Not found book you need</h1>
                        </div>
                    ) : (
                        <>
                            <div className="row mt-4 center-v mb-4">
                                {listBooks.map((book) => (
                                    <LoadProduct key={book.maSach} book={book} />
                                ))}
                            </div>
                            <Pagination trangHienTai={trangHienTai} tongSoTrang={tongSoTrang} phanTrang={PhanTrang} />
                        </>

                    )}

                </>
            )}

        </div >
    )
}

export default PageListProduct;
import React, { HtmlHTMLAttributes, useEffect, useState } from "react";

import HinhAnhModel from "../../../models/HinhAnhModel";

import '../../product/components/load.css'
import { getAllImageByBook, getOnetImageOfBook } from "../../../api/HinhAnhApi";
import { Link, useParams } from "react-router-dom";
import SachModel from "../../../models/SachModel";
import { getBookById } from "../../../api/SachApi";
import ProductImage from "./ProductImage";
import ProductReview from "./ProductReview";
import { formatingNumber } from "../../utils/FormatingNumber";


const ProductDetails: React.FC = () =>
{
    const { maSach } = useParams();

    let maSachNumber = 0;
    try
    {
        maSachNumber = parseInt(maSach + '');
        if (Number.isNaN(maSachNumber))
        {
            maSachNumber = 0;
        }
    } catch (error)
    {
        maSachNumber = 0;
        console.error('Error', error);
    }
    const [sach, setSach] = useState<SachModel | null>(null)
    const [loadingData, setLoadingData] = useState(false);
    const [error, setError] = useState<Error | null>(null)
    const [soLuong, setSoLuong] = useState(1);


    const tangSoLuong = () =>
    {
        const soLuongHienTai = sach && sach.soLuong ? sach.soLuong : 0;
        if (soLuong < soLuongHienTai)
        {
            setSoLuong(pre => pre + 1);
        }
    }

    const giamSoLuong = () =>
    {
        if (soLuong > 1)
        {
            setSoLuong(soLuong - 1);
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        const inputValue = event.target.value.trim();
        if (inputValue === "")
        {
            setSoLuong(NaN); // Set the state to empty string if the input becomes empty
        } else
        {
            const soLuongMoi = parseInt(event.target.value);
            const soLuongKho = (sach && sach.soLuong) ? sach.soLuong : 0;
            if (soLuongMoi && soLuongMoi >= 1 && soLuongMoi <= soLuongKho)
            {
                setSoLuong(soLuongMoi)
            }
        }
    }

    const handleBlur = () =>
    {
        if (isNaN(soLuong) || soLuong < 1)
        {
            setSoLuong(1);
        }
    }


    const handleAddCart = () =>
    {

    }

    const handleBuy = () =>
    {

    }

    useEffect(() =>
    {
        setLoadingData(true);
        const fetchData = async () =>
        {
            setTimeout(async () =>
            {
                try
                {
                    const dataSach = await getBookById(maSachNumber) // return a array contain object images
                    setSach(dataSach)

                } catch (error: any)
                {
                    setError(error.message)
                    console.error('Error fetching data: ' + error);

                } finally
                {
                    setLoadingData(false);
                }
            }, 0);

        }

        fetchData()
    }, [maSach])




    return (
        <div className='container'>
            {loadingData ? (
                <div className="">
                    <div className="">

                    </div>
                </div>
            ) : error ? (
                <div>
                    <h1>You have error : {error.message}</h1>
                </div>
            ) : (
                <>
                    {!sach ? (
                        <div className="d-flex justify-content-center">
                            <h1>Not found book you need</h1>
                        </div>
                    ) : (
                        <>
                            <div className='row mt-4 mb-4 grid--3-col'>
                                <div className="">
                                    <ProductImage maSach={maSachNumber} />
                                </div>
                                <div className="">
                                    <div className="row">
                                        <div className="">
                                            <h1>{sach.tenSach}</h1>
                                            <h4>{sach.trungBinhXepHang}</h4>
                                            <h4>{formatingNumber(sach.giaBan)} vnđ</h4>
                                            <hr></hr>
                                            <div dangerouslySetInnerHTML={{ __html: sach.moTa + '' }} />
                                            <hr></hr>
                                        </div>
                                    </div>

                                </div>
                                <div className="product-cart">
                                    <div>
                                        <div className="mb-2 text-center">Số lượng</div>
                                        <div className="d-flex align-items-center">
                                            <button className="btn btn-outline-secondary me-2" onClick={tangSoLuong}>+</button>
                                            <input value={isNaN(soLuong) ? '' : soLuong} min={1}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="form-control text-center"
                                                type="number" />
                                            <button className="btn btn-outline-secondary ms-2" onClick={giamSoLuong}>-</button>
                                        </div>
                                        <div>
                                            {
                                                sach.giaBan && (
                                                    <div className="mt-2 text-center">
                                                        <h5>Số tiền tạm tính</h5>
                                                        <p><strong>{formatingNumber(soLuong * sach.giaBan)} vnđ</strong>`</p>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button type="button"
                                                className="btn btn-danger mt-3"
                                                onClick={handleBuy}
                                            >Mua Ngay</button>
                                            <button type="button"
                                                className="btn btn-outline-secondary mt-2"
                                                onClick={handleAddCart}
                                            >Thêm vào giỏ hàng</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" mb-4 mt-4   ">
                                <ProductReview maSach={maSachNumber} />
                            </div>
                        </>


                    )}
                </>
            )}

        </div>
    )
}
export default ProductDetails;
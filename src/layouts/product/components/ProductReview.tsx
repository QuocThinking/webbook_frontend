import React, { useEffect, useState } from "react";

import HinhAnhModel from "../../../models/HinhAnhModel";

import '../../product/components/load.css'
import { getAllImageByBook, getOnetImageOfBook } from "../../../api/HinhAnhApi";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { getAllReviewByBook } from "../../../api/ReviewApi";
import ReviewModel from "../../../models/ReviewModel";
import { Star, StarFill } from "react-bootstrap-icons";
import renderRating from "../../utils/StartLevel";

interface ProductReviewInterface 
{
    maSach: number
}
const ProductReview: React.FC<ProductReviewInterface> = (props) =>
{

    const maSach: number = props.maSach;
    const [danhSachDanhGia, setDanhSachDanhGia] = useState<ReviewModel[]>([])
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
                    const dataReview = await getAllReviewByBook(maSach)
                    setDanhSachDanhGia(dataReview)



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
    }, [])





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
                    <div className="mt-2 mb-3">
                        <h3>Đánh giá sản phẩm : </h3>
                        {danhSachDanhGia.map((danhgia, index) => (
                            <div className="trans-pro">

                                <div className="">
                                    <h3>{renderRating(danhgia.diemXepHang ? danhgia.diemXepHang : 0)}</h3>
                                </div>
                                <div className="text-trans">
                                    <p>{danhgia.nhanXet}</p>
                                </div>

                            </div>

                        ))
                        }
                    </div>


                </>
            )}

        </div>
    )
}
export default ProductReview;
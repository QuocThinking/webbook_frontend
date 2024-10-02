import React, { useEffect, useState } from "react";
import SachModel from "../../../models/SachModel";
import { Book } from "../../../models/Book";
import HinhAnhModel from "../../../models/HinhAnhModel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../product/components/load.css'
import { getAllImageByBook, getOnetImageOfBook } from "../../../api/HinhAnhApi";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

interface ProductDetailsInterface
{
    maSach: number
}
const ProductImage: React.FC<ProductDetailsInterface> = (props) =>
{

    const maSach: number = props.maSach;
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
                    const dataAnh = await getAllImageByBook(maSach)
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
    }, [])



    let dataAnh: string = '';
    if (danhSachAnh[0] && danhSachAnh[0].duLieuAnh)
    {
        dataAnh = danhSachAnh[0].duLieuAnh
    }

    return (
        <div className=' mt-2'>
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
                    <div className="">

                        <div className="">
                            <Carousel showArrows={true} showIndicators={true}>
                                {
                                    danhSachAnh.map((hinhanh, index) => (
                                        <div key={index} className="image-product">
                                            <img src={hinhanh.duLieuAnh} alt={hinhanh.tenHinhAnh} style={{ maxWidth: "250px", maxHeight: "auto" }}></img>
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </div>

                    </div>
                </>
            )}

        </div>
    )
}
export default ProductImage;
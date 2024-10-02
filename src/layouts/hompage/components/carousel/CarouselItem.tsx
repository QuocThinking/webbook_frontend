import React, { useEffect, useState } from "react";
import SachModel from "../../../../models/SachModel";
import HinhAnhModel from "../../../../models/HinhAnhModel";
import { getOnetImageOfBook } from "../../../../api/HinhAnhApi";
import '../../style.css'


interface CarouselItemInterFace
{
    book: SachModel
}
const CarouselItem: React.FC<CarouselItemInterFace> = ({ book }) =>
{

    const [danhSachAnh, setDanhSachAnh] = useState<HinhAnhModel[]>([])
    const [loadingData, setLoadingData] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() =>
    {
        setLoadingData(true);
        const fetchData = async () =>
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


        }

        fetchData()
    }, [book.maSach])



    let dataAnh: string = '';
    if (danhSachAnh[0] && danhSachAnh[0].duLieuAnh)
    {
        dataAnh = danhSachAnh[0].duLieuAnh
    }

    return (
        <div className=''>
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
                    <div className="carousel-slide">
                        <div className="step-img-box">
                            <img src={dataAnh} className='book-carousel'
                                alt={book.tenSach} style={{ height: '200px' }}></img>
                        </div>
                        <div className="step-text">
                            <h5>{book.tenSach}</h5>
                            {/* <p>{book.moTa}</p> */}
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}
export default CarouselItem;
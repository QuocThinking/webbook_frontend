import React, { useEffect, useState } from "react";
import '../../../../layouts/general.css';
import '../../style.css'

import { getNewBook } from "../../../../api/SachApi";
import SachModel from "../../../../models/SachModel";
import { error } from "console";
import CarouselItem from "./CarouselItem";

const Carousel: React.FC = () =>
{
    const [danhSachSach, setDanhSachSach] = useState<SachModel[]>([])
    const [loadData, setLoadData] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() =>
    {
        setLoadData(true)
        getNewBook().then(
            data =>
            {
                setDanhSachSach(data.ketQua);
                setLoadData(false)
            }
        ).catch(
            error =>
            {
                setError(error.message);
            }
        )

    }, [])

    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            {loadData ? (
                <div>
                    <p></p>
                </div>
            ) : error ? (
                <div>
                    <p>You have new : {error}</p>
                </div>
            ) : (
                <>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    {danhSachSach.length > 0 ? (
                        <div className="carousel-inner">
                            <div className="carousel-item active " data-bs-interval="10000">
                                <CarouselItem key={0} book={danhSachSach[0]} />
                            </div>

                            <div className="carousel-item  " data-bs-interval="10000">
                                <CarouselItem key={1} book={danhSachSach[2]} />
                            </div>

                            <div className="carousel-item  " data-bs-interval="10000">
                                <CarouselItem key={2} book={danhSachSach[1]} />
                            </div>

                        </div>
                    ) : (
                        <div>
                            <p> Fetch data...</p>
                        </div>
                    )}

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </>
            )}
        </div>
    )
}

export default Carousel;
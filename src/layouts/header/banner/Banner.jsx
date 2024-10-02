import React from "react";
import '../style.css'

export function Banner() {
    return (
        <div id='banner' className='center-v'>
            <div id='banner' className="p-5 banner-bg  bg-image d-flex justify-content-center align-items-center">
                <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center ">
                    <div>
                        <h2 className="fw-bold display-5">
                            Sách là nền tảng của tri thức
                        </h2>
                        <div className="fancy">
                            <span className="fancy-text">Le Thanh Quoc</span>
                        </div>

                        <button className="btn btn-primary btn-lg text-white">Khám phá sách tại Vanila</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
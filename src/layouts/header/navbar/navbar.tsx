import React, { ChangeEvent, useEffect, useState } from "react";
import '../style.css'

interface NavbarInterface
{
    name: string;
    setName: (tukhoa: string) => void;
}


function Navbar({ name, setName }: NavbarInterface)
{
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() =>
    {
        const handleScroll = () =>
        {
            // Kiểm tra vị trí cuộn của trang
            const scrollPosition = window.scrollY;

            // Kiểm tra nếu vị trí scroll vượt qua một giá trị cố định (ví dụ: 100px) thì hiển thị Navbar
            if (scrollPosition >= 350)
            {
                setShowNavbar(true);
            } else
            {
                setShowNavbar(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () =>
        {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    let tempSearch: string = "";
    //su kien thay doi noi dung
    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    {
        tempSearch = e.target.value;
    }
    const handleSearch = () =>
    {
        setName(tempSearch)
    }
    return (
        <div>
            {showNavbar && <div style={{ height: '50px' }}></div>}
            <nav className={`navbar header navbar-expand-lg ${showNavbar ? "navbar-fixed" : ""
                } navbar-dark shadow-5-strong`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src='/images/public/logo.png' alt="logo" className="d-inline-block align-text-top rounded-pill" />
                        <span className="ml-1">Vanila</span>
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Thể Loại Sách
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Thể Loại 1</a></li>
                                    <li><a className="dropdown-item" href="#">Thể loại 2</a></li>
                                    <li><a className="dropdown-item" href="#">Thể loại 3</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Qui định bán hàng
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Qui định 1</a></li>
                                    <li><a className="dropdown-item" href="#">Qui định 2</a></li>
                                    <li><a className="dropdown-item" href="#">Qui định 3</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Liên hệ</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                                onChange={onSearchInputChange} value={tempSearch} />
                            <button className="btn  btn-search" type="submit" onClick={handleSearch}>Search</button>
                        </div>
                        <ul className="navbar-nav me-l">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-shopping-cart"></i>
                                </a>
                            </li>
                        </ul>

                        <ul className="navbar-nav me-l">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <li className="fas fa-user"></li>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>

    )
}

export default Navbar;
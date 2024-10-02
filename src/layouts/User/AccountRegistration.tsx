import React, { useState } from "react";

function AccountRegistration()
{

    const [tenDangNhap, setTenDangNhap] = useState("");
    const [email, setEmail] = useState("");
    const [hoDem, setHoDem] = useState("");
    const [ten, setTen] = useState("");
    const [soDienThoai, setSoDienThoai] = useState("");
    const [matKhau, setMatKhau] = useState("");
    const [matKhauNhapLai, setMatKhauNhapLai] = useState("")
    const [gioiTinh, setGioiTinh] = useState("M");
    const [errorTenDangNhap, setErrorTenDangNhap] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorMatKhau, setErrorMatKhau] = useState("");
    const [errorMatKhauNhapLai, setErrorMatKhauNhapLai] = useState("");
    const [thongBao, setThongBao] = useState("");

    const handleSubmit = async (e: React.FormEvent) =>
    {
        setErrorTenDangNhap("");
        setErrorEmail("");
        setErrorMatKhau("");
        setErrorMatKhauNhapLai("");

        e.preventDefault();

        const isUserName = !await kiemTraTenDangNhap(tenDangNhap);
        const isEmail = !await kiemTraTEmail(email);
        const isPassword = kiemTraMatKhau(matKhau);
        const isPasswordAgain = kiemTraMatKhauNhapLai(matKhauNhapLai);

        if (isEmail && isPasswordAgain && isPassword && isUserName)
        {
            try
            {
                const url = `http://localhost:8080/api/v1/account/registration`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        tenDangNhap: tenDangNhap,
                        email: email,
                        matKhau: matKhau,
                        ten: ten,
                        soDienThoai: soDienThoai,
                        gioiTinh: gioiTinh,
                        isActive: false,
                        codeAcvive: ""


                    })
                });

                if (response.ok)
                {
                    setThongBao("Đăng ký thành công")
                } else
                {
                    setThongBao("Có lỗi không đang ký tài khoản được !")
                }

            } catch (err)
            {

            }
        }
    }

    const kiemTraTenDangNhap = async (tenDangNhap: string) =>
    {
        const url = `http://localhost:8080/api/v1/nguoi-dung/search/existsByTenDangNhap?tenDangNhap=${tenDangNhap}`;

        try
        {
            const api = await fetch(url);
            const data = await api.text();
            if (data === "true")
            {
                setErrorTenDangNhap("Ten Dang Nhap Da Ton Tai");
                return true;
            }
            return false;
        } catch (error)
        {
            console.log("Lỗi khi kiểm tra tên đăng nhập: ", error);
            return false

        }
    }
    const handleTenDangNhapChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setTenDangNhap(e.target.value)

        setErrorTenDangNhap('')

        //end-points
        return kiemTraTenDangNhap(e.target.value)

    }

    //Email

    const kiemTraTEmail = async (email: string) =>
    {
        const url = `http://localhost:8080/api/v1/nguoi-dung/search/existsByEmail?email=${email}`;

        try
        {
            const api = await fetch(url);
            const data = await api.text();
            if (data === "true")
            {
                setErrorEmail("Email Da Ton Tai");
                return true;
            }
            return false;
        } catch (error)
        {
            console.log("Lỗi khi kiểm tra email: ", error);
            return false

        }
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setEmail(e.target.value)

        setErrorEmail('')

        //end-points
        return kiemTraTEmail(e.target.value)

    }

    // Mat Khau

    const kiemTraMatKhau = (matKhau: string) =>
    {
        const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(matKhau))
        {
            setErrorMatKhau("Mat khau phai co it nhat 8 ky tu va chua 1 ky tu dac biet");
            return false;
        } else
        {
            setErrorMatKhau('');
            return true;
        }
    }
    const handleMatKhau = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setMatKhau(e.target.value);

        setErrorMatKhau('')

        //end-points
        return kiemTraMatKhau(e.target.value)

    }

    // Check password again
    const kiemTraMatKhauNhapLai = (e: string) =>
    {
        if (e !== matKhau)
        {
            setErrorMatKhauNhapLai("Mat khau khong trung khop");
            return false;
        } else
        {
            setErrorMatKhauNhapLai("");
            return true;
        }
    }
    const handlePasswordSame = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setMatKhauNhapLai(e.target.value);

        setErrorMatKhauNhapLai('')

        //end-points
        return kiemTraMatKhauNhapLai(e.target.value)

    }
    return (
        <div className="container">
            <h1 className="mt-5 text-center">Đăng ký</h1>
            <div className="mt-3 col-md-4 col-12 mx-auto">
                <form onSubmit={handleSubmit} className="form">
                    <div className="mb-3">
                        <label htmlFor="tenDangNhap" className="form-label">Tên Đang Nhập</label>
                        <input type="text" id="tenDangNhap" className="form-control"
                            value={tenDangNhap}
                            onChange={handleTenDangNhapChange}
                        />
                        <div style={{ color: 'red' }}>{errorTenDangNhap}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" id="email" className="form-control"
                            value={email}
                            onChange={handleEmail}
                        />
                        <div style={{ color: 'red' }}>{errorEmail}</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Mật Khẩu</label>
                        <input type="password" id="matKhau" className="form-control"
                            value={matKhau}
                            onChange={handleMatKhau}
                        />
                        <div style={{ color: 'red' }}>{errorMatKhau}</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="matKhauNhapLai" className="form-label">Nhap Lai Mat Khau</label>
                        <input type="password" id="matKhauNhapLai" className="form-control"
                            value={matKhauNhapLai}
                            onChange={handlePasswordSame}
                        />
                        <div style={{ color: 'red' }}>{errorMatKhauNhapLai}</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="hoDem" className="form-label">Họ Đệm</label>
                        <input type="text" id="hoDem" className="form-control"
                            value={hoDem}
                            onChange={(e) => setHoDem(e.target.value)}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="hoDem" className="form-label">Tên</label>
                        <input type="text" id="ten" className="form-control"
                            value={ten}
                            onChange={(e) => setTen(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="soDienThoai" className="form-label">Số Điện Thoại</label>
                        <input type="text" id="soDienThoai" className="form-control"
                            value={soDienThoai}
                            onChange={(e) => setSoDienThoai(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gioiTinh" className="form-label">Giới Tính</label>
                        <input type="text" id="sgioiTinh" className="form-control"
                            value={gioiTinh}
                            onChange={(e) => setGioiTinh(e.target.value)}
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-secondary">Đăng Ký</button>
                        <div className="mt-3" style={{ color: 'green' }}>{thongBao}</div>
                    </div>
                </form>
            </div>
        </div>
    );


}

export default AccountRegistration;
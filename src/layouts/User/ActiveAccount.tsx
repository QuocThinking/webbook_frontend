import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ActiveAccount()
{
    const { email, maKichHoat } = useParams(); // This will extract the path parameters
    const [daKichHoat, setDaKichHoat] = useState(false);
    const [thongBao, setThongBao] = useState("");

    useEffect(() =>
    {
        if (email && maKichHoat)
        {
            thucHienKichHoat();
        }
    }, [email, maKichHoat]);

    const thucHienKichHoat = async () =>
    {
        try
        {
            const url = `http://localhost:/api/v1/account/kich-hoat?email=${email}&maKichHoat=${maKichHoat}`;
            const response = await fetch(url, {
                method: "GET",
            });
            if (response.ok)
            {
                setDaKichHoat(true);
                setThongBao("Kích hoạt tài khoản thành công");
            } else
            {
                const message = await response.text();
                setThongBao(message);
            }
        } catch (error)
        {
            setThongBao("Có lỗi xảy ra khi kích hoạt tài khoản");
        }
    };
    return (
        <div>
            {/* <h1>Thông Báo : </h1> */}
            {
                daKichHoat ? (
                    <h1>Kich hoat tai khoan thanh cong</h1>
                ) : (
                    <strong>{thongBao}</strong>
                )
            }
        </div>
    )

}

export default ActiveAccount;
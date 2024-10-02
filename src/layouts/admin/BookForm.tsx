import React, { FormEvent, useState } from "react";

const BookForm: React.FC = () =>
{
    const [sach, setSach] = useState({
        maSach: 0,
        tenSach: "",
        giaBan: 0,
        giaNiemYet: 0,
        moTa: "",
        soLuong: 0,
        tenTacgia: "",
        isbn: "",
        trungBinhXepHang: 0
    })

    const handleSubmit = (event: FormEvent) =>
    {
        event.preventDefault();
        const token = localStorage.getItem('token');
        console.log('Token', token);
        fetch(`http://localhost:8080/sach`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(sach)

        }).then(
            (response) =>
            {
                if (response.ok)
                {
                    alert("Add book successfully");
                    setSach({
                        maSach: 0,
                        tenSach: "",
                        giaBan: 0,
                        giaNiemYet: 0,
                        moTa: "",
                        soLuong: 0,
                        tenTacgia: "",
                        isbn: "",
                        trungBinhXepHang: 0
                    })
                } else
                {
                    alert('Gặp lỗi trong quá trình thêm sách')
                }
            }
        )
    }
    return (
        <div className="mt-3 col-md-4 col-12 mx-auto">
            <h1>Thêm Sách</h1>
            <form onSubmit={handleSubmit} className="form ">
                <input id="maSach" type="hidden" value={sach.maSach} />

                <div className="mb-3">
                    <label htmlFor="tenSach" >Tên sách</label>
                    <input className="form-control" type="text" value={sach.tenSach}
                        onChange={(e) => setSach({ ...sach, tenSach: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="giaBan">Giá bán</label>
                    <input className="form-control" type="number"
                        value={sach.giaBan} onChange={(e) => setSach({ ...sach, giaBan: parseFloat(e.target.value) })} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="giaBan">Giá Niêm Yết</label>
                    <input className="form-control" type="number"
                        value={sach.giaNiemYet} onChange={(e) => setSach({ ...sach, giaNiemYet: parseFloat(e.target.value) })} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="giaBan">Số Lượng</label>
                    <input className="form-control" type="number"
                        value={sach.soLuong} onChange={(e) => setSach({ ...sach, soLuong: parseInt(e.target.value) })} required />

                </div>
                <div className="mb-3">
                    <label htmlFor="tenSach" >Tên Tác Giả</label>
                    <input className="form-control" type="text" value={sach.tenTacgia}
                        onChange={(e) => setSach({ ...sach, tenTacgia: e.target.value })}
                        required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tenSach" >Mô tả</label>
                    <input className="form-control" type="text" value={sach.moTa}
                        onChange={(e) => setSach({ ...sach, moTa: e.target.value })}
                    />
                </div>
                <div className="mb-3">

                    <label htmlFor="tenSach" >ISBN</label>
                    <input className="form-control" type="text" value={sach.isbn}
                        onChange={(e) => setSach({ ...sach, isbn: e.target.value })}
                    />
                </div>


                <div className="text-center">
                    <button type="submit" className="btn btn-secondary mt-3 text-center">Thêm</button>
                </div>
            </form>
        </div>
    )
}

export default BookForm;
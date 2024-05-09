class HinhAnhModel
{
    maHinhAnh?: number;
    tenHinhAnh?: string;
    isIcon?: boolean;
    duongDan?: string;
    duLieuAnh?: string;

    constructor(
        maHinhAnh?: number,
        tenHinhAnh?: string,
        isIcon?: boolean,
        duongDan?: string,
        duLieuAnh?: string,
    )
    {
        this.maHinhAnh = maHinhAnh;
        this.tenHinhAnh = tenHinhAnh;
        this.isIcon = isIcon;
        this.duongDan = duongDan;
        this.duLieuAnh = duLieuAnh;
    }
}

export default HinhAnhModel;
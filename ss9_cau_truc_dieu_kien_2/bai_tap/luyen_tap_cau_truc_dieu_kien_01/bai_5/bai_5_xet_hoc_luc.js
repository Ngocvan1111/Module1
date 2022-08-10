function ketqua() {
    let dtxt = parseFloat(document.dataform.diemtxt.value);
    let dgkt = parseFloat(document.dataform.diemgkt.value);
    let dckt = parseFloat(document.dataform.diemckt.value);
    let dtxl = parseFloat(document.dataform.diemtxl.value);
    let dgkl = parseFloat(document.dataform.diemgkl.value);
    let dckl = parseFloat(document.dataform.diemckl.value);
    let dtxh = parseFloat(document.dataform.diemtxh.value);
    let dgkh = parseFloat(document.dataform.diemgkh.value);
    let dckh = parseFloat(document.dataform.diemckh.value);
    let tongt = (dtxt + 2*dgkt + dckt*3)/5;
    let tongl = (dtxl + 2*dgkl + dckl*3)/5;
    let tongh = (dtxh + 2*dgkh + dckh*3)/5;
    let tong = (tongt + tongl + tongh)/3;
    if (tong > 8) {
        alert("Học sinh giỏi");
    } else if (tong > 6.5 ){
        alert("học sinh khá");

    }else if (tong > 5) {
        alert("học sinh trung bình");
    }
    else {
        alert("học sinh yếu")
    }

}
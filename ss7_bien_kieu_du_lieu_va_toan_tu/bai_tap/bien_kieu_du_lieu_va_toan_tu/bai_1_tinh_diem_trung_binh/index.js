function average() {
    let diemly = parseFloat(document.dataform.diemvatly.value);
    let diemhoa = parseFloat(document.dataform.diemhoa.value);
    let diemsinh = parseFloat(document.dataform.diemsinh.value);
    let display = "Điểm trung binh:  " ;
    display += ((diemly + diemhoa + diemsinh)/3).toFixed(3)

    document.getElementsByClassName("abc")[0].innerHTML = display;


}
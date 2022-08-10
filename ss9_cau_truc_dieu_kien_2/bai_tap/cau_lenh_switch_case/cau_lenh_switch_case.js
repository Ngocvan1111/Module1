let thang_1 = "1";
let thang_2 = "2";
let thang_3 = "3";
let thang_4 = "4";
let thang_5 = "5";
let thang_6 = "6";
let thang_7 = "7";
let thang_8 = "8";
let thang_9 = "9";
let thang_10 = "10";
let thang_11 = "11";
let thang_12 = "12";

function songay() {
    let month = document.dataform.songay1.value;
switch (month) {
    case thang_1:
    case thang_3:
    case thang_5:
    case thang_7:
    case thang_8:
    case thang_10:
    case thang_12:
        document.getElementById("display").innerHTML = "Thang " + month + " có 31 ngày";
        break;
    case thang_4:
    case thang_6:
    case thang_9:
    case thang_11:
        document.getElementById("display").innerHTML = "Thang " + month + " Có 30 ngày";
        break;
    case thang_2:
        document.getElementById("display").innerHTML =  " Tháng 2 có 28 hoặc 29 ngày "
        break;
    default:
        document.getElementById("display").innerHTML = "Nhập lại tháng"

}

}

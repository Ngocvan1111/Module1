
function tong() {
    let number1 = parseFloat(document.dataform.number1.value);
    let number2 = parseFloat(document.dataform.number2.value);
    let result = "Tổng là :" ;
    result += number1 + number2;
   document.getElementsByClassName("display")[0].innerHTML = result;
}
function hieu() {
    let number1 = parseFloat(document.dataform.number1.value);
    let number2 = parseFloat(document.dataform.number2.value);
    let result = "Hiệu là :" ;
    result += number1 - number2;
    document.getElementsByClassName("display")[0].innerHTML = result;
}
function nhan() {
    let number1 = parseFloat(document.dataform.number1.value);
    let number2 = parseFloat(document.dataform.number2.value);
    let result = "Tích là :" ;
    result += number1*number2;
    document.getElementsByClassName("display")[0].innerHTML = result;
}
function chia() {
    let number1 = parseFloat(document.dataform.number1.value);
    let number2 = parseFloat(document.dataform.number2.value);
    let result = "Thương là :" ;
    result += (number1 / number2).toFixed(2);
    document.getElementsByClassName("display")[0].innerHTML = result;
}

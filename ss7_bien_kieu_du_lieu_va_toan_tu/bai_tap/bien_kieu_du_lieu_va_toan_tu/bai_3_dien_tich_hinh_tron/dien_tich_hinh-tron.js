function dientich() {
    let r = parseFloat(document.dataform.bankinh.value);
    let dt = "Diện tích:";
    dt += (r*r*3.14).toFixed(1)
    document.getElementsByClassName("display")[0].innerHTML = dt;

}
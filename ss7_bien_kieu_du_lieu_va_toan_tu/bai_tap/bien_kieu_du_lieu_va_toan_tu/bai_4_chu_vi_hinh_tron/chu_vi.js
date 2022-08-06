function chuvi() {
    let r = parseFloat(document.dataform.bankinh.value);
    let cv = "Chu vi:";
    cv += 2*r*3.14
    document.getElementsByClassName("display")[0].innerHTML = cv;

}
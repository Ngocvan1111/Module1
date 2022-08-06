function Tranfer() {
    let c = parseFloat(document.dataform.doc.value);
    let f = "Độ F là:"
    f += ((9*c + 160)/5).toFixed(2)
    document.getElementsByClassName("chuyendoi")[0].innerHTML = f;

}
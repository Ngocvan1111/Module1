function giaipt() {
    let a = parseFloat(document.dataform.hsa.value);
    let b = parseFloat(document.dataform.hsb.value);
    let ketqua = "Phương trình: "+ a + "x+"+ b+ " = 0 <br>";
    if (a==0 && b==0)
        ketqua += "Vô số nghiệm"
    if (a==0 && b!=0)
        ketqua += "Phương trình vô nghiệm"
    if(a!=0)
        ketqua += "PT có nghiệm là:" + (-b/a)
    document.getElementsByClassName("ketqua")[0.0].innerHTML = ketqua;
}

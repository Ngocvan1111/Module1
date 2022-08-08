function tranfer() {
    let Amount = document.getElementById("so").value;
    let fromc = document.getElementById("From").value;
    let toc = document.getElementById("To").value;
    var Result;

    if (fromc == "USD" && toc == "VND") {
        Result = "Result: "+ (Amount*23000)+ "  VNĐ";

    }
    else if (fromc == "VND" && toc == "USD") {
        Result = "Result: "+ (Amount/23000)+ "  $";

    }
    else if (fromc == "VND") {
        Result = "Result: " +Amount + "  VNĐ";
    }
    else {
        Result = "Result: " +Amount + "  $";
    }
    document.getElementById("ketqua").innerHTML = Result;


}
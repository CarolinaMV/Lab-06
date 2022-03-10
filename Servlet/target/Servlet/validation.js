function validateForm() {
    var x;
    x = document.getElementById("id").value;
    if (isNaN(x)) {
        alert("Valor no numerico: '"+x+"'");
        return false;
    }
    return true;
}
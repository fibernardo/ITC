document.querySelector("#convert").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const operation = document.getElementById("operation").value;

    let result;

    if (operation == "C2F") {
        result = (num1 * 9/5) + 32;
    } else if (operation == "F2C") {
        result = (num1 - 32) * 5/9;
    } else if (operation == "M2F") {
        result = num1 * 3.28084;
    } else if (operation == "F2M") {
        result = num1 / 3.28084;
    }

    document.getElementById("result").value = result;
});

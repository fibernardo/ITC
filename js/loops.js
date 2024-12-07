document.querySelector("#calculate").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const operation = document.getElementById("operation").value;

    let result = 0;
    let i = 1;

    if(operation == "Fact") {
        result = 1;
        while(i <= num1) {
            result *= i;
            i++;
        }
    } else if(operation == "Sum") {
        do {
            result += i;
            i++;
        } while(i <= num1);
    } else if(operation =="Ave") {
        for(let i = 1; i <= num1; i++) {
            result += i;
        } 
        result /= num1;
    }

    document.getElementById("result").value = result;
});
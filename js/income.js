document.querySelector("#calculateTax").addEventListener("click", () => {
    const taxableIncome = document.querySelector("#tIncome").value;
    const calculatedTax = ((num1) => {
        const taxableIncome = parseFloat(num1);
        let taxAmount = 0;

        if (tIncome <= 250000) {
            tAmount = 0;
        } else if (tIncome <= 400000) {
            tAmount = (tIncome - 250000) * 0.20;
        } else if (tIncome <= 800000) {
            tAmount = (tIncome - 400000) * 0.25 + 30000;
        } else if (tIncome <= 2000000) {
            tAmount = (tIncome - 800000) * 0.30 + 130000;
        } else if (tIncome <= 8000000) {
            tAmount = (tIncome - 2000000) * 0.32 + 490000;
        } else {
            tAmount = (tIncome - 8000000) * 0.35 + 2410000;
        }

        return tAmount;
    })(tIncome);

    document.querySelector("#taxResult").textContent = `Total Tax: ₱${calculatedTax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
});

document.querySelector("#convert").addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("inputv").value);
    const operation = document.getElementById("operation").value;
	
            if (isNaN(inputValue)) {
                resultDiv.textContent = 'Please enter a valid number';
                return;
            }

            let result;
            let unit;

            switch(conversionType) {
                case 'FtoC':
                    result = ((inputv - 32) * 5/9).toFixed(2);
                    unit = '°C';
                    break;
                case 'CtoF':
                    result = ((inputv * 9/5) + 32).toFixed(2);
                    unit = '°F';
                    break;
                case 'MtoF':
                    result = (inputv * 3.28084).toFixed(2);
                    unit = 'ft';
                    break;
                case 'FtoM':
                    result = (inputv / 3.28084).toFixed(2);
                    unit = 'm';
                    break;
            }

            resultsDiv.innerHTML =
				`${inputv} converted to ${result}${unit}`;
        }
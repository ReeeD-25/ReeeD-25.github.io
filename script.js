

// Newton's Law of Cooling/Heating Calculation
document.getElementById('coolingHeatingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const T0 = parseFloat(document.getElementById('initialTemp').value); // Initial Temperature
    const Ts = parseFloat(document.getElementById('roomTemp').value); // Room Temperature
    const finalTempInput = document.getElementById('finalTemp').value; // Final Temperature
    const t = parseFloat(document.getElementById('time').value); // Time
    const kInput = document.getElementById('coolingRate').value; // Cooling/Heating Rate

    // Check if k is provided
    let k;
    if (kInput === "") {
        // Calculate k if it is missing
        if (finalTempInput === "") {
            alert("Please provide either k or Final Temperature (T) to calculate.");
            return; // Exit if neither k nor final temperature is provided
        }
        
        const finalTemp = parseFloat(finalTempInput); // Final Temperature
        k = -Math.log((finalTemp - Ts) / (T0 - Ts)) / t;
        document.getElementById('CoolingHeatingResult').textContent = `Calculated Cooling/Heating Rate (k): ${k.toFixed(4)}`;
    } else {
        // Parse k from input
        k = parseFloat(kInput);
        
        // Check if final temperature is provided
        if (finalTempInput === "") {
            // Calculate the final temperature using the formula T(t) = Ts + (T0 - Ts) * e^(-kt)
            const calculatedFinalTemp = Ts + (T0 - Ts) * Math.exp(-k * t);
            document.getElementById('CoolingHeatingResult').textContent = `Calculated Final Temperature (T): ${calculatedFinalTemp.toFixed(2)}°C`;
        } else {
            const finalTemp = parseFloat(finalTempInput); // Final Temperature
            // Display the final temperature if both k and final temperature are provided
            document.getElementById('CoolingHeatingResult').textContent = `Final Temperature (T): ${finalTemp}°C (k: ${k})`;
        }
    }
});

// Growth and Decay Calculation
document.getElementById('growthDecayForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const P0 = parseFloat(document.getElementById('initialValue').value); // Initial Value
    const kInput = document.getElementById('rate').value; // Growth/Decay Rate
    const finalValueInput = document.getElementById('finalValue').value; // Final Value
    const t = parseFloat(document.getElementById('timeGrowth').value); // Time

    // Check if k is provided
    let k;
    if (kInput === "") {
        // If k is not provided, check if final value is provided
        if (finalValueInput === "") {
            alert("Please provide either k or Final Value (P) to calculate.");
            return; // Exit if neither k nor final value is provided
        }

        const finalValue = parseFloat(finalValueInput); // Final Value
        // Calculate k using the formula P = P0 * e^(kt) => k = (ln(P/P0)) / t
        k = Math.log(finalValue / P0) / t;
        document.getElementById('GrowthDecayResult').textContent = `Calculated Growth/Decay Rate (k): ${k.toFixed(4)}`;
    } else {
        // Parse k from input
        k = parseFloat(kInput);
        
        // Check if final value is provided
        if (finalValueInput === "") {
            // Calculate the final value using the formula P = P0 * e^(kt)
            const result = P0 * Math.exp(k * t);
            document.getElementById('GrowthDecayResult').textContent = `Calculated Final Value (P): ${result.toFixed(2)}`;
        } else {
            const finalValue = parseFloat(finalValueInput); // Final Value
            // Display the final value if both k and final value are provided
            document.getElementById('GrowthDecayResult').textContent = `Final Value (P): ${finalValue} (k: ${k})`;
        }
    }
});
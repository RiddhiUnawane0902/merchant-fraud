async function predict() {
    try {
        const data = {
            amount: Number(document.getElementById("amount").value),
            hour: Number(document.getElementById("hour").value),
            location_change: Number(document.getElementById("location_change").value),
            device_shared: Number(document.getElementById("device_shared").value)
        };

        const response = await fetch("http://127.0.0.1:8000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        document.getElementById("result").innerText =
            "Prediction: " + result.prediction;

    } catch (error) {
        document.getElementById("result").innerText =
            "Error connecting to backend";
        console.error(error);
    }
}

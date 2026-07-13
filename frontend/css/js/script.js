const form = document.getElementById("attendanceForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        attendance: document.getElementById("attendance").value,
        date: document.getElementById("date").value
    };

    try {
        const response = await fetch("http://localhost:5000/attendance", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        alert(result.message);

        form.reset();
    } catch (error) {
        alert("Error connecting to server.");
        console.error(error);
    }
});
document.addEventListener("DOMContentLoaded", function () {

    const attendanceForm = document.getElementById("attendanceForm");

    attendanceForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const attendanceData = {
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
                body: JSON.stringify(attendanceData)
            });

            const result = await response.json();

            alert(result.message);

            attendanceForm.reset();

        } catch (error) {
            console.error(error);
            alert("Error connecting to the server.");
        }
    });

});
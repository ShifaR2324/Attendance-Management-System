document.addEventListener("DOMContentLoaded", loadAttendance);

async function loadAttendance() {
    try {
        const response = await fetch("http://localhost:5000/attendance");
        const data = await response.json();

        const table = document.getElementById("attendanceTable");
        table.innerHTML = "";

        data.forEach((student) => {
            table.innerHTML += `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.department}</td>
                    <td>${student.attendance}</td>
                    <td>${student.date}</td>
                    <td>
                        <button onclick="editAttendance(${student.id})">Edit</button>
                        <button onclick="deleteAttendance(${student.id})">Delete</button>
                    </td>
                </tr>
            `;
        });

    } catch (error) {
        console.error(error);
        alert("Unable to load attendance records.");
    }
}

function editAttendance(id) {
    alert("Edit feature for ID: " + id);
}

async function deleteAttendance(id) {

    if (!confirm("Are you sure
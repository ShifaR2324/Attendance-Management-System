document.addEventListener("DOMContentLoaded", function () {

    const attendanceFormBtn = document.getElementById("attendanceFormBtn");
    const attendanceListBtn = document.getElementById("attendanceListBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    if (attendanceFormBtn) {
        attendanceFormBtn.addEventListener("click", function () {
            window.location.href = "attendance.html";
        });
    }

    if (attendanceListBtn) {
        attendanceListBtn.addEventListener("click", function () {
            window.location.href = "attendanceList.html";
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            alert("Logged out successfully!");
            window.location.href = "login.html";
        });
    }

});
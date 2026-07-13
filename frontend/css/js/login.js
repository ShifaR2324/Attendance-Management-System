document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simple login validation
        if (username === "admin" && password === "admin123") {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid Username or Password!");
        }
    });

});
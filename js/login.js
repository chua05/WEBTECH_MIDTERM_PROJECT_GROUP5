document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded successfully!");

    // Hanapin ang login form
    let loginForm = document.getElementById("loginForm");

    // Kung may nahanap na login form, i-attach ang event listener
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Pigilan ang default page reload

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            console.log("Username:", username);
            console.log("Password:", password);

            // Simple login check (replace this with real authentication)
            if (username === "admin" && password === "password123") {
                console.log("Login successful! Redirecting...");
                window.location.href = "dashboard.html"; // Palitan ito kung iba ang page mo
            } else {
                console.log("Invalid login");
                let message = document.getElementById("message");
                message.textContent = "Invalid username or password.";
                message.style.color = "red";
            }
        });
    } else {
        console.error("Login form not found!");
    }
});


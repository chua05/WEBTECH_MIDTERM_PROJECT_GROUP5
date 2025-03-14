ddocument.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        console.log("Entered Username:", username);
        console.log("Entered Password:", password);

        const users = {
            "admin": "password",
            "chua": "123456"
        };

        if (users[username] && users[username] === password) {
            console.log("Login successful!");

            message.textContent = "Login successful!";
            message.style.color = "green";
            localStorage.setItem("loggedInUser", username);

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);
        } else {
            console.log("Invalid login attempt");
            message.textContent = "Invalid username or password.";
            message.style.color = "red";
        }
    });
});

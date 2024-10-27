document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");
    const profilePic = localStorage.getItem("profilePic");

    if (username) {
        document.getElementById("username").textContent = username;
    }
    if (profilePic) {
        document.getElementById("usr-profile").src = profilePic;
    }
});
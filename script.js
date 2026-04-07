// =========================
// JAVASCRIPT FEATURES
// =========================

// 1️⃣ Welcome prompt
window.onload = function () {
    window.scrollTo(0, 0);

    let visitorName = prompt("Welcome! Please enter your name:");

    if (visitorName && visitorName.trim() !== "") {
        alert("Welcome to my professional portfolio, " + visitorName + "!");
        document.getElementById("welcomeText").innerText =
            "Hello, " + visitorName + "! Welcome to my portfolio.";
    } else {
        document.getElementById("welcomeText").innerText =
            "Hello! Welcome to my portfolio.";
    }
};

// 2️⃣ Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.innerText = "Please fill in all fields.";
    } else {
        formMessage.style.color = "green";
        formMessage.innerText = "✔ Message sent successfully!";
    }
});

// 3️⃣ Add skill dynamically
document.getElementById("addSkillBtn").onclick = function () {
    let skillInput = document.getElementById("newSkill").value;

    if (skillInput !== "") {
        let li = document.createElement("li");
        li.textContent = skillInput;

        document.getElementById("skillList").appendChild(li);
        document.getElementById("newSkill").value = "";

        // Add highlight toggle to new skill
        li.addEventListener("click", function () {
            li.classList.toggle("highlight");
        });
    }
};

// 4️⃣ Optional: Dark mode toggle
document.getElementById("darkModeBtn").onclick = function () {
    document.body.classList.toggle("dark");
};

$(document).ready(function () {
    // Toggle more projects
    $("#toggleProjects").on("click", function () {
        $("#moreProjects").toggle();
        $(this).text($("#moreProjects").is(":visible") ? "Show less projects" : "Show more projects");
    });

    // Highlight skills
    $("#skillList li").on("click", function () {
        $(this).toggleClass("highlight");
    });
});
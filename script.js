// Get the theme button
const themeToggler = document.getElementById("theme_toggler");

// Get the greeting text
const greeting = document.getElementById("greeting");

// Get the theme image
const themeImage = document.getElementById("theme_image");

// Check if a theme was previously saved
const savedTheme = localStorage.getItem("theme");

// If the saved theme is night, apply the night theme
if (savedTheme === "night") {
    document.body.classList.add("night");
    greeting.textContent = "Good Night!";
    themeImage.src = "night.jpg";
    themeToggler.textContent = "Switch to Day";
}

// Switch between day and night when the button is clicked
themeToggler.addEventListener("click", function () {

    document.body.classList.toggle("night");

    // Change the text depending on the current theme
    if (document.body.classList.contains("night")) {
        greeting.textContent = "Good Night!";
        themeImage.src = "night.jpg";
        themeToggler.textContent = "Switch to Day";
        
        // Save the night theme
        localStorage.setItem("theme", "night");
    } else {
        greeting.textContent = "Good Morning!";
        themeToggler.textContent = "Switch to Night";
        themeImage.src = "day.jpg";
        
        // Save the day theme
        localStorage.setItem("theme", "day");
    }
});
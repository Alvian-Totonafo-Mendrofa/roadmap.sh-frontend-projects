document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const toggleDarkMode = document.createElement("button");
    toggleDarkMode.textContent = "Toggle Dark Mode";
    toggleDarkMode.style.position = "fixed";
    toggleDarkMode.style.bottom = "20px";
    toggleDarkMode.style.right = "20px";
    toggleDarkMode.style.padding = "10px";
    toggleDarkMode.style.borderRadius = "8px";
    toggleDarkMode.style.background = "#4a90e2";
    toggleDarkMode.style.color = "white";
    toggleDarkMode.style.border = "none";
    toggleDarkMode.style.cursor = "pointer";
    
    document.body.appendChild(toggleDarkMode);

    toggleDarkMode.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Navbar Toggle
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (navbar && navLinks) {
        const menuToggle = document.createElement("div");
        menuToggle.innerHTML = "☰";
        menuToggle.classList.add("menu-toggle");

        navbar.insertBefore(menuToggle, navbar.firstChild);

        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");

            // Toggle hamburger menu to X
            menuToggle.innerHTML = navLinks.classList.contains("active") ? "✖" : "☰";
        });
    } else {
        console.error("Navbar atau Nav Links tidak ditemukan!");
    }
});

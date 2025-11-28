document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    // Create overlay
    let overlay = document.createElement("div");
    overlay.classList.add("nav-overlay");
    document.body.appendChild(overlay);

    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;

        nav.classList.toggle("show-menu", isOpen);
        overlay.style.display = isOpen ? "block" : "none";

        // Change icon (bars <-> X)
        menuToggle.innerHTML = isOpen 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    }

    menuToggle.addEventListener("click", toggleMenu);

    // Click outside closes menu
    overlay.addEventListener("click", toggleMenu);
});

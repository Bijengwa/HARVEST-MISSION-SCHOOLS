document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("hamburgerBtn");
    const nav = document.getElementById("mobileNav");

    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
        nav.classList.toggle("active", isOpen);

        // switch icon
        menuToggle.innerHTML = isOpen
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    }

    // open/close on button
    menuToggle.addEventListener("click", toggleMenu);

    // close when clicking a nav link
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (isOpen) toggleMenu();
        });
    });
});

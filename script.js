document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sideMenu = document.querySelector(".side-menu");
    const closeMenu = document.querySelector(".close-menu");

    // Otwieranie menu
    menuToggle.addEventListener("click", function () {
        sideMenu.classList.add("active");
    });

    // Zamykanie menu
    closeMenu.addEventListener("click", function () {
        sideMenu.classList.remove("active");
    });

    // Zamykanie po kliknięciu poza menu
    document.addEventListener("click", function (event) {
        if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            sideMenu.classList.remove("active");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });
});

/* =========================================================
   DILIP PRAJAPAT - ADVOCATE PROFILE
   Basic Website Interactions
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    const navLinks = document.querySelectorAll(".main-nav a");


    /* ================= MOBILE MENU ================= */

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("active");

            const isOpen = mainNav.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";

        });

    }


    /* ================= CLOSE MENU AFTER CLICK ================= */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (mainNav) {
                mainNav.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.textContent = "☰";
                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    });


    /* ================= ESCAPE KEY ================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (mainNav) {
                mainNav.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.textContent = "☰";
                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        }

    });

});
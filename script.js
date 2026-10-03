/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const menu =
        document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


/* ================= CLOSE MENU ================= */

const navLinks =
    document.querySelectorAll(".nav-links a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".nav-links")
            .classList.remove("active");

    });

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();
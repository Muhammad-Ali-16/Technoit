window.onscroll = function () { scrollFunction() };
let navbar = document.getElementById("navbar");
let nav_links = document.getElementsByClassName("nav-link");

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navbar.classList.add("nav-scroll");
        navbar.classList.remove("navbar-color");
        for (const link of nav_links) {
            link.classList.add("nav-scroll-color");
        }
    }

    else {
        navbar.classList.remove("nav-scroll");
        navbar.classList.add("navbar-color");
        for (const link of nav_links) {
            link.classList.remove("nav-scroll-color");
        }
    }
}

let theme_btn = document.getElementById("theme-btn");
let theme_icon = document.getElementById("theme-icon");

theme_btn.addEventListener("click", function () {
    document.body.classList.toggle('dark-theme');

    theme_icon.classList.toggle("bi-moon");
    theme_icon.classList.toggle("bi-brightness-high-fill");
});



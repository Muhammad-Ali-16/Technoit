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

function ThemeChanger() {

    let theme_btn = document.getElementById("theme-btn");
    let theme_icon = document.getElementById("theme-icon");
    let theme_overlay_btn = document.getElementById("theme-overlay-btn");
    let theme_overlay_icon = document.getElementById("theme-overlay-icon");

    theme_btn.addEventListener("click", function () {
        document.body.classList.toggle('dark-theme');
        theme_icon.classList.toggle("bi-moon");
        theme_icon.classList.toggle("bi-brightness-high-fill");
    });

    theme_overlay_btn.addEventListener("click", function () {
        document.body.classList.toggle('dark-theme');
        theme_overlay_icon.classList.toggle("bi-moon");
        theme_overlay_icon.classList.toggle("bi-brightness-high-fill");
    });
}

ThemeChanger();

function NavOverlay() {

    let overlay = document.getElementById("overlay");
    let overlay_content = document.getElementById("overlay-content");
    let open = document.getElementById("open-btn");
    let close = document.getElementById("close-btn");

    console.log(overlay_content);

    open.addEventListener("click", function openNav() {
        overlay.style.width = "250px";
        overlay_content.style.display = "block";
        open.style.display = "none";
        close.style.display = "block";
    });

    close.addEventListener("click", function closeNav() {
        overlay.style.width = "0px";
        overlay_content.style.display = "none";
        open.style.display = "block";
        close.style.display = "none";

    })

}

NavOverlay();

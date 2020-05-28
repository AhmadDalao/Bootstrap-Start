let navbarList = document.querySelector(".navbar-list");

function myFunction() {
    if (navbarList.className === "navbar-list") {
        navbarList.classList.toggle("active");
        // navbarList.style.transition = "all .5s easy-in-out";
    } else {
        navbarList.classList.toggle("active");
        // navbarList.style.transition = "all .5s easy-in-out";

    }

}
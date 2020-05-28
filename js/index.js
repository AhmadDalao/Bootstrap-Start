function myFunction() {
    var x = document.getElementById("navbar-list");
    if (x.className === "navbar-list") {
        x.classList.add("active");
        console.log(x.className + "inside the function if true do me");
    } else {
        x.classList.remove("active");
        console.log(x.className + "inside the function am from else");
    }
}
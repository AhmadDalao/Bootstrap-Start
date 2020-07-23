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

// loading screen

$(window).on("load", function() {
    $(".loading__title , .spinner-container").fadeOut(2500);
    $(".loading-screen").fadeOut(400, function() {
        $("body").css("overflow", "auto");
        $(this).remove();
    });
});
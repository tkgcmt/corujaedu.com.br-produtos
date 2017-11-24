$(function () {
    $("#_menu-toggle1").click(function () {
        $(this).toggleClass("active");
        $(".mobile-nav").toggleClass("show-mobile-nav");
    });

    /*$("#_log-in").click(function (e) {
    $(".logged-in").toggleClass("hide");
    $(".not-logged-in").toggleClass("hide");
});

$("#_log-out").click(function (e) {
    $(".logged-in").toggleClass("hide");
    $(".not-logged-in").toggleClass("hide");
});*/

    $('html').click(function (event) {
        var clickedOn = $(event.target);
        if (clickedOn.parents().addBack().is("#_menu-toggle1")) {
            console.log("Clicked on", clickedOn[0], "inside the div");
        } else {
            console.log("Clicked on", clickedOn[0], "outside the div");
            if ($("#_menu-toggle1").hasClass("active")) {
                $("#_menu-toggle1").toggleClass("active");
                $(".mobile-nav").toggleClass("show-mobile-nav");
            }
        }
    });
});

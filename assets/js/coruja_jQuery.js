$(function () {
    $("#menu-toggle1").click(function () {
        $(this).toggleClass("active");
        $(".mobile-nav").toggleClass("show-mobile-nav");
    });

    $("#log-in").click(function (e) {
        $(".user-info").toggleClass("active");
        if ($(".user-info").hasClass("active")) {
            $(".logged-in").css("display", "block");
            $(".not-logged-in").css("display", "none");
        } else {
            $(".not-logged-in").css("display", "block");
            $(".logged-in").css("display", "none");
        }
    });
    $("#log-out").click(function (e) {
        $(".user-info").toggleClass("active");
        if ($(".user-info").hasClass("active")) {
            $(".logged-in").css("display", "block");
            $(".not-logged-in").css("display", "none");
        } else {
            $(".not-logged-in").css("display", "block");
            $(".logged-in").css("display", "none");
        }
    });

    $('html').click(function (event) {
        var clickedOn = $(event.target);
        /*if (!clickedOn.parents().andSelf().is("#myModal") && $("#myModal").css("display") != "none") {
            console.log("Clicked outside myModal and");
            $("#myModal").css("display", "none");
        }*/
        if (clickedOn.parents().addBack().is("#menu-toggle1")) {
            console.log("Clicked on", clickedOn[0], "inside the div");
        } else {
            console.log("Clicked outside the div");
        }
    });
});

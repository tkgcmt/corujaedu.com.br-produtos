$(function () {
    $("#menu-toggle1").click(function () {
        $(this).toggleClass("active");
        $(".mobile-nav").toggleClass("show-mobile-nav");
    });

    $('html').click(function (event) {
        var clickedOn = $(event.target);
        /*if (!clickedOn.parents().andSelf().is("#myModal") && $("#myModal").css("display") != "none") {
            console.log("Clicked outside myModal and");
            $("#myModal").css("display", "none");
        }*/
        if (clickedOn.parents().andSelf().is("#menu-toggle1")) {
            console.log("Clicked on", clickedOn[0], "inside the div");
        } else {
            console.log("Clicked outside the div");
        }
    });


});

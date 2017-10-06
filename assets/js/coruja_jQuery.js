$(function () {
    var loadHeader = false;
    var loadFooter = false;

    /* load header */
    $("#_header").load("templates/header/header.html", function (response, status, req) {
        if (status == "error") {
            var msg = "Desculpe-nos, encontramos um erro ao carregar o conteúdo de 'header': ";
            $("#error").html(msg + req.status + " " + req.statusText);
            loadHeader = false;
        } else {
            loadHeader = true;
        }
    });

    /* load footer */
    $("#_footer").load("templates/footer/footer.html", function (response, status, req) {
        if (status == "error") {
            var msg = "Desculpe-nos, encontramos um erro ao carregar o conteúdo de 'footer': ";
            $("#error").html(msg + req.status + " " + req.statusText);
            loadFooter = false;
        } else {
            loadFooter = true;
        }
    });
    /*console.log("wowowow loading content finished " + "loadHeader: " + loadHeader + " loadFooter: " + loadFooter);
if (loadFooter && loadHeader) {
    $("#_menu-toggle1").click(function () {
        $(this).toggleClass("active");
        $(".mobile-nav").toggleClass("show-mobile-nav");
    });

    $("#_log-in").click(function (e) {
        $(".logged-in").toggleClass("hide");
        $(".not-logged-in").toggleClass("hide");
    });

    $("#_log-out").click(function (e) {
        $(".logged-in").toggleClass("hide");
        $(".not-logged-in").toggleClass("hide");
    });

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
}*/
    /* /if */
});

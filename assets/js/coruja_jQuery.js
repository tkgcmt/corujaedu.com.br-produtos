$(function () {
    AOS.init();
    var root = 'http://' + window.location.host;
    var loadHeader = false;
    var loadFooter = false;

    console.log("\n\nWINDOW.LOCATION.HOST = " + window.location.host + "\n\n");
    /* load header */
    //    var header = root + "/templates/header/header.html";
    var header = "/templates/header/header.html";
    $("#_header").load(header, function (response, status, req) {
        if (status == "error") {
            var msg = "Desculpe-nos, encontramos um erro ao carregar o conteúdo de 'header': ";
            $("#error").html(msg + req.status + " " + req.statusText);
            loadHeader = false;
            console.log("Desculpe-nos, encontramos um erro ao carregar o conteúdo de 'header': " + req.status + " " + req.statusText + "\n" + header);
        } else {
            loadHeader = true;
            console.log("Conteúdo de 'header' carregado com sucesso!");
        }
    });

    /* load footer */
    //    var footer = root + "/templates/footer/footer.html";
    var footer = "/templates/footer/footer.html";
    $("#_footer").load(footer, function (response, status, req) {
        if (status == "error") {
            var msg = "Desculpe-nos, encontramos um erro ao carregar o conteúdo de 'footer': ";
            $("#error").html(msg + req.status + " " + req.statusText);
            loadFooter = false;
            console.log("aDesculpe-nos, encontramos um erro ao carregar o conteúdo de 'footer': " + req.status + " " + req.statusText + "\n" + footer);
        } else {
            loadFooter = true;
            console.log("Conteúdo de 'footer' carregado com sucesso!");
        }
    });
});

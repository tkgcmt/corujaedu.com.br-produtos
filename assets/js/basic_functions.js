// Get the modal
var modal = document.getElementById('myModal');

var menuBtn = document.getElementById('menu-toggle1');

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn1.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks the button, open the modal
btn2.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* jQuery */

$(document).ready(function () {
    $("#menu-toggle1").click(function () {
        $(this).toggleClass("active");
        var mobileNav = document.getElementsByClassName("mobile-nav")[0];
        $(mobileNav).toggleClass("show-mobile-nav");
    });
});

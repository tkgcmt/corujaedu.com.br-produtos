// Get the modal
var modal = document.getElementById('_myModal');

// Get the button that opens the modal
var btn1 = document.getElementById("_myBtn1");
// Get the button that opens the modal
var btn2 = document.getElementById("_myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn1.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks the button, open the modal
btn2.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

};

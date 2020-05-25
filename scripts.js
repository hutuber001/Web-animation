//Define body
let body = document.querySelector("body");

//Turn billie met toetsenbord
var billie = document.querySelector("#billieTotaal");

window.addEventListener('keydown', toggle);

function toggle(event) {
    if (event.keyCode == 32) {
        billie.classList.toggle('billie');
    } else {
    };
}

//Turn billie met knop
function turnBillieknop() {
   var element = document.body;
   element.classList.toggle("turnBillienow");
}


//Invert met knop toggle
function myFunction() {
   var element = document.body;
   element.classList.toggle("invertcolor");
}

let body = document.querySelector("body");
let header = document.querySelector("header");


/*
function scrollheader () {
   
    if (body.scrollTop > 1) {
        header.className="scroll";
    }
    else{
        header.classList.remove("scroll")
    }
}
*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").className="scroll";
  } else {
    document.getElementById("header").classList.remove("scroll")
  }
}
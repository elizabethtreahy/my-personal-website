// const h2 = document.createElement("h2");
// h2.textContent = "";
// document.querySelector("body").appendChild(h2);

let name = document.getElementById("name-header");

name.addEventListener("mouseenter", function( event ) {
  event.target.style.color = "black"; 
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

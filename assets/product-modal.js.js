document.addEventListener("DOMContentLoaded", function () {
 
var modal = document.getElementById("productModal");


var btn = document.getElementById("openModalBtn");


var close = document.getElementById("closeModal");


btn.onclick = function() {
  modal.style.display = "block";
}
  
close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

})
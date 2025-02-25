document.addEventListener("DOMContentLoaded", function () {
 
const modal = document.getElementById("productModal");


const btn = document.getElementById("openModalBtn");


const close = document.getElementById("closeModal");


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
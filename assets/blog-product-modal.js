document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("productModal");
  const btn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModal"); 

  console.log("=====>>>>>", modal)
  
  if (btn && modal && closeBtn) {
    btn.onclick = function () {
      modal.style.display = "block";
    };

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }
});

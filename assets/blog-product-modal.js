document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("productModal");
  const btn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModal"); 

  console.log("=====>>>>>", modal,btn,)
  function openModal () {
      modal.style.display = "block";
    };
  function closeModal () {
      modal.style.display = "none";
    };
  
  // if (btn && modal && closeBtn) {
    

  //   window.onclick = function (event) {
  //     if (event.target === modal) {
  //       modal.style.display = "none";
  //     }
  //   };
  // }
});

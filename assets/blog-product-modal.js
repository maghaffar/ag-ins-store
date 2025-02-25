
  
  const btn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModal"); 

  function openModal (id) {
    const modal = document.getElementById(`productModal-${id}`);
      modal.style.display = "block";
    };
  function closeModal (id) {
    const modal = document.getElementById(`productModal-${id}`);
      modal.style.display = "none";
    };
  
 

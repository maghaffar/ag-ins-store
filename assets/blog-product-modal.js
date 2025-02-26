
  
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
function addToCart() {
  let formData = {
 'items': [{
  'id': 50224037134615,
  'quantity': 2
  }]
};

fetch(window.Shopify.routes.root + 'cart/add.js', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
.then(response => {
  console.log("=====>>>>PRODUCT ADDED TO CART:", response.json())
  return response.json();
})
.catch((error) => {
  console.error('Error:', error);
});
}
  
 

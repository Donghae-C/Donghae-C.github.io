let updateCart = function (id) {
  let product = productData.find((p) => p.id === id);
  console.log(product);
  localStorage.setItem(product.id, product.title + "," + product.price);
  updateCartCount();
};

let updateCartCount = function () {
  document.getElementById("cartCount").innerText = localStorage.length;
};

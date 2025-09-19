onload = () => {
  spreadProduct(productData);
  updateCartCount();
};

const productBox = document.getElementById("products");
let spreadProduct = function (data) {
  let cnt = data.length;
  productBox.innerHTML = "";
  let str = "";
  console.log(cnt);

  for (let i = 0; i < cnt; i++) {
    str += `<div class="col mb-5">
            <a href="./item.html?id=${data[i].id}">
              <div class="card h-100">
                <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                <img class="card-img-top" src="${data[i].img}" alt="${data[i].title}" />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">${data[i].title}</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <span class="text-muted text-decoration-line-through">${data[i].price}</span>
                    ${data[i].price * 0.9}
                  </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" onclick="updateCart(${
                    data[i].id
                  })">Add to cart</a></div>
                </div>
              </div>
            </a>
          </div>`;
  }
  productBox.innerHTML = str;
};

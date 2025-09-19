const params = new URLSearchParams(location.search);
const id = Number(params.get("id")); //주소에서 id를 추출.

onload = () => {
  renderDetail();
};

let detailBox = document.getElementById("detailBox");
let productDetail = productData.find((p) => p.id === id);

let renderDetail = function () {
  detailBox.innerHTML = `<div class="container px-4 px-lg-5 my-5">
        <div class="row gx-4 gx-lg-5 align-items-center">
          <div class="col-md-6">
            <img class="card-img-top mb-5 mb-md-0"
              src="${productDetail.img}"
              alt="..."
            />
          </div>
          <div class="col-md-6">
            <div class="small mb-1">SKU: BST-498</div>
            <h1 class="display-5 fw-bolder">${productDetail.title}</h1>
            <div class="fs-5 mb-5">
              <span class="text-decoration-line-through">${productDetail.price}원</span>
              <span>${productDetail.price * 0.9}원</span>
            </div>
            <p class="lead">
              ${productDetail.content}
            </p>
            <div class="d-flex">
              <input
                class="form-control text-center me-3"
                id="inputQuantity"
                type="num"
                value="1"
                style="max-width: 3rem"
              />
              <button class="btn btn-outline-dark flex-shrink-0" type="button">
                <i class="bi-cart-fill me-1"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>`;
};

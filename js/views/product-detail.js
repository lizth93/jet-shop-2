import View from "./view";

export default class ProductDetailView extends View {
  renderSpinner() {
    this.render(
      `
      <div class="spinner">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </div>
      `
    );
  }

  renderProduct(product) {
    const images = product.images;

    const markup = `
      <div class="container detail-section">

      <a class="preview-link" href="#${product.id}"></a>
        <div class="grid grid--3-cols">
          <div class="small-images">
          ${images
            .map((x) => `<img class="img-small" src="${x}" alt="" />`)
            .join("")}

          </div>
        <div>


          <figure class="product_fig_detail">
            <img
              src="${product.image}"
              alt="${product.title}"
              class="product__img"
            />

            <h1 class="product__title">
              <span>"${product.title}"</span>
            </h1>
          </figure>
        </div>
        <div>
          <div class="detail-product">
            <h2 class="heading--2">Product Description:</h2>
            <ul class="product__description-list">
              <li class="product__description">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="check-icon h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <label for="description"><strong>Description:</strong> </label>
                <span class="product__description">${
                  product.description
                } </span>
              </li>
              <li class="product__description">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="check-icon h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <label for="Description"><strong>Brand:</strong> </label>
                <span class="product__description">${product.brand}</span>
              </li>

              <li class="product_description">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="check-icon h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <label for="Description"><strong>On Stock:</strong> </label>
                <span class="product__description">${product.stock}</span>
              </li>

              <label class="discount-detail" for="discount">
                With <strong>${product.discount} </strong>of discount:
              </label>
            </ul>
            <p class="product-price-detail">
              <span>$</span><strong>${product.price}</strong>
            </p>

            <button class="btn btn-add-car">Add a Cart</button>
          </div>
        </div>

        <div class="comments">
          <h2 class="heading--2">Comments</h2>

          <p>BODY TO comments by User</p>
        </div>
      </div>
    </div>

    `;

    this.render(markup);
  }
}

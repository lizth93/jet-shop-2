import View from "./view";

class ProductsView extends View {
  _parentEl = document.querySelector(".section-products");

  _errorMessage = "We could not find that product. Please try another one";
  _message = "";

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) => {
      window.addEventListener(ev, handler);
    });
  }

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview(result) {
    return `
    
      <div class= "container section_product-ppal">
       
          <div class="target-product">
            <a class="preview-link" href="#${result.id}">
            <figure class="product__fig">
              <img
                src="${result.image}"
                alt="${result.title}"
                class="product__img"
              />
            
            </figure>
            <h1 class="product__title">
            <span>${result.title}</span>
            </h1>

            <div class="descriptions-product">
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
                  
                    <label for="description"
                      ><strong>Description:</strong>
                    </label>
                    <span class="product__description">${result.description}</span>
                  
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
                    <span class="product__description">${result.brand}</span>
                  
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

                <label for="Description"><strong>On Stock:</strong> </label>
                <span class="product__description">${result.stock}</span>
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

              <label for="Description"><strong>ID of Product:</strong> </label>
              <span class="id_product">${result.id}</span>
              </li>

              
              <label class="discount" for="discount">
                With <strong>${result.discount}% </strong>of discount:
              </label>
              </ul>
              <p class="product-price"><span>$</span><strong>${result.price}</strong></p>
            </div>
            </a> 
          </div>
        
      </div>
    
  `;
  }
  _generateMarkupDetails() {
    return this._generateMarkupPreviewDetails(this._data);
  }

  _generateMarkupPreviewDetails(result) {
    const images = result.images;

    return `
    <div class="container detail-section">

    <a class="preview-link" href="#${result.id}"></a> 
      <div class="grid grid--3-cols">
        <div class="small-images">
        ${images
          .map((x) => `<img class="img-small" src="${x}" alt="" />`)
          .join("")}

        </div>
      <div>
   

        <figure class="product_fig_detail">
          <img
            src="${result.image}"
            alt="${result.title}"
            class="product__img"
          />

          <h1 class="product__title">
            <span>"${result.title}"</span>
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
              <span class="product__description">${result.description} </span>
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
              <span class="product__description">${result.brand}</span>
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
              <span class="product__description">${result.stock}</span>
            </li>

            <label class="discount-detail" for="discount">
              With <strong>${result.discount} </strong>of discount:
            </label>
          </ul>
          <p class="product-price-detail">
            <span>$</span><strong>${result.price}</strong>
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
  }
}

export default new ProductsView();

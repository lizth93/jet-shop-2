import View from './view'

export default class CategoriesView extends View {
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
    )
  }

  renderCategories(categories) {
    const categoriesMap = categories.map(x => `
    <div class= "container section_product-ppal">

        <div class="target-product">
          <a class="preview-link" href="#${x.id}">
          <figure class="product__fig">
            <img
              src="${x.image}"
              alt="${x.title}"
              class="product__img"
            />

          </figure>
          <h1 class="product__title">
          <span>${x.title}</span>
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
                  <span class="product__description">${x.description}</span>

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
                  <span class="product__description">${x.brand}</span>

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
              <span class="product__description">${x.stock}</span>
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
            <span class="id_product">${x.id}</span>
            </li>


            <label class="discount" for="discount">
              With <strong>${x.discount}% </strong>of discount:
            </label>
            </ul>
            <p class="product-price"><span>$</span><strong>${x.price}</strong></p>
          </div>
          </a>
        </div>

    </div>
    `)

    this.render(categoriesMap.join(''))
  }
}

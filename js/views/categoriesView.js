class categoriesView {
  _parentEl = document.querySelector(".main-nav-list-2");

  getCategory() {
    let categoryId = window.location.hash.slice(1);

    if (!categoryId) return (categoryId = "All");

    return categoryId;
  }

  addHandlerCategories(handler) {
    ["hashchange", "load"].forEach((ev) => {
      window.addEventListener(ev, handler);
    });
  }

  addHandlerRenderDetails(handler) {
    let productId = 0;
    document.querySelectorAll(".target-product").forEach((elem) => {
      elem.addEventListener("click", () => {
        productId = elem.querySelector(".id_product").textContent;

        handler(productId);
      });
    });

    window.addEventListener("load", function () {
      let productId = window.location.hash.slice(1);
      handler(productId);
    });
  }

  markupSmallImages(elem) {
    console.log(elem.toString(), "from markup images");
    return `
    <img
      src="${elem.src}"
      alt="imagenes of product"
      class="product__img"
    />
   
`;
  }

  addHandlerRenderImages() {
    document.querySelectorAll(".img-small").forEach((elem) => {
      elem.addEventListener("click", () => {
        const _parentElImages = document.querySelector(".product_fig_detail");

        const markup = this.markupSmallImages(elem);
        _parentElImages.innerHTML = "";

        _parentElImages.insertAdjacentHTML("afterbegin", markup);
      });
    });
  }
}

export default new categoriesView();

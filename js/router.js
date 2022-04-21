export default class Router {
  constructor(productsCtrl, productDetailCtrl) {
    this.productsCtrl = productsCtrl;
    this.productDetailCtrl = productDetailCtrl;
  }

  start() {
    this.routing();

    window.addEventListener("hashchange", () => {
      this.routing();
    });
  }

  routing() {
    const path = window.location.hash.replace("#", "");
    const productId = parseInt(path);
    const isProductId = !isNaN(productId);

    if (isProductId) {
      this.productDetailCtrl.loadProduct(productId);
    } else {
      this.productsCtrl.loadCategories();
    }
  }
}

export default class ProductDetailCtrl {
  constructor(productDetailView) {
    this.productDetailView = productDetailView
  }

  loadProduct(id) {
    this.productDetailView.renderSpinner()
  }
}

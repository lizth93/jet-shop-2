export default class ProductDetailCtrl {
  constructor(productDetailView, productDetailModel) {
    this.productDetailView = productDetailView
    this.productDetailModel = productDetailModel
  }

  async loadProduct(id) {
    this.productDetailView.renderSpinner()
    const product = await this.productDetailModel.loadProduct(id)
    this.productDetailView.renderProduct(product)
  }
}

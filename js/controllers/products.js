import { CATEGORIES } from './products-constants'

export default class ProductsCtrl {
  constructor(productsView, productsModel) {
    this.productsView = productsView;
    this.productsModel = productsModel
  }

  async loadCategories() {
    this.productsView.init()
    this.productsView.renderSpinner()
    const categories = await this.productsModel.loadProducts(
      this.getCategory()
    )
    this.productsView.renderCategories(categories)
  }

  getCategory() {
    return window.location.hash.slice(1) || CATEGORIES.All
  }

  async loadCategory(category) {
    await model.loadProductsCategory(category);
    productsView.render(model.getCategoriesResultsPage(1));
  }
}

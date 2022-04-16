import { CATEGORIES } from './products-constants'

export default class ProductsCtrl {
  constructor(productsView, productsModel) {
    this.productsView = productsView;
    this.productsModel = productsModel
  }

  async loadCategories() {
    this.productsView.renderSpinner()
    const products = await this.productsModel.loadProducts(
      this.getCategory()
    )
    this.productsView.renderProducts(products)
    this.loadOnSearch()
  }

  getCategory() {
    return window.location.hash.slice(1) || CATEGORIES.All
  }

  async loadCategory(category) {
    await model.loadProductsCategory(category);
    productsView.render(model.getCategoriesResultsPage(1));
  }

  loadOnSearch() {
    this.productsView.onSearch(async (searchTerm) => {
      this.productsView.renderSpinner()
      const products = await this.productsModel.getBySearchTerm(searchTerm)
      this.productsView.renderProducts(products)
    })
  }
}

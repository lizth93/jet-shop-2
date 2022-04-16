import { CATEGORIES } from './categories-constants'

export default class CategoriesCtrl {
  constructor(categoriesView, categoriesModel) {
    this.categoriesView = categoriesView;
    this.categoriesModel = categoriesModel
  }

  async loadCategories() {
    this.categoriesView.init()
    this.categoriesView.renderSpinner()
    const categories = await this.categoriesModel.loadCategory(
      this.getCategory()
    )
    this.categoriesView.renderCategories(categories)
  }

  getCategory() {
    return window.location.hash.slice(1) || CATEGORIES.All
  }

  async loadCategory(category) {
    await model.loadProductsCategory(category);
    productsView.render(model.getCategoriesResultsPage(1));
  }

  // controlPaginationByCategory(goToPage) {
  //   const categoryId = categoriesView.getCategory();
  //   if (categoryId != "All") {
  //     productsView.render(model.getCategoriesResultsPage(goToPage));
  //     paginationView.renderCategoriesPerPageNoAll(model.state.search);
  //   }

  //   if (categoryId === "All") {
  //     productsView.render(model.getCategoriesResultsPage(goToPage));
  //     paginationView.renderCategoriesPerPageAll(model.state.search);
  //   }
  //   categoriesView.addHandlerRenderDetails(controlDetailsForProduct);
  // };
}

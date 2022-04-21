import { CATEGORIES } from "./products-constants";

export default class ProductsCtrl {
  constructor(productsView, productsModel, paginationView) {
    this.productsView = productsView;
    this.productsModel = productsModel;
    this.paginationView = paginationView;
  }

  async loadCategories() {
    this.productsView.renderSpinner();
    const products = await this.productsModel.loadProducts(this.getCategory());
    this.productsView.renderProducts(products);
    this.loadOnSearch();
    this.paginationView.init();
    this.loadPagination();
    this.loadCategoriesOnPageChange();
  }

  loadCategoriesOnPageChange() {
    this.paginationView.addHandlerClick((page) => {
      this.productsModel.pagination.page = page;
      this.loadCategories();
    });
  }

  loadPagination() {
    this.paginationView.renderPagination(
      this.productsModel.pagination.page,
      this.productsModel.pagination.pages
    );
  }

  getCategory() {
    return window.location.hash.slice(1) || CATEGORIES.All;
  }

  // async loadCategory(category) { ////////////////////////////esto se esta usando?
  //   await model.loadProductsCategory(category);
  //   productsView.render(model.getCategoriesResultsPage(1));
  // }

  loadOnSearch() {
    this.productsView.onSearch(async (searchTerm) => {
      this.productsView.renderSpinner();
      const products = await this.productsModel.getBySearchTerm(searchTerm);
      this.productsView.renderProducts(products);
    });
  }
}

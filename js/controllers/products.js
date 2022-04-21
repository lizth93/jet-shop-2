import { CATEGORIES } from "./products-constants";

export default class ProductsCtrl {
  constructor(productsView, productsModel, paginationView) {
    this.productsView = productsView;
    this.productsModel = productsModel;
    this.paginationView = paginationView;
  }

  async loadProducts() {
    this.productsView.renderSpinner();
    const products = await this.productsModel.loadProducts(this.getCategory());
    this.productsView.renderProducts(products);
    this.loadOnSearch();
    this.paginationView.init();
    this.loadPagination();
    this.loadCategoriesOnPageChange(products);
  }

  loadCategoriesOnPageChange() {
    this.paginationView.addHandlerClick((page) => {
      this.productsModel.pagination.page = page;
      this.loadProducts();

      // this.paginationView.init();
      // this.loadPagination();
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

  loadOnSearch() {
    this.productsView.onSearch(async (searchTerm) => {
      this.productsView.renderSpinner();
      const products = await this.productsModel.getBySearchTerm(searchTerm);
      this.productsView.renderProducts(products);

      this.paginationView.init();
      this.loadPagination();
      this.loadCategoriesOnPageChange(products);
    });
  }
}

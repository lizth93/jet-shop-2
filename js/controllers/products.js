import { CATEGORIES } from "./products-constants";

export default class ProductsCtrl {
  prevLoadCriteria = "";
  searchTerm = "";
  showingCategoryResults = true;

  constructor(productsView, productsModel, paginationView) {
    this.productsView = productsView;
    this.productsModel = productsModel;
    this.paginationView = paginationView;
  }

  async loadProducts() {
    this.showingCategoryResults = true;
    this.resetPageByCategoryChange();
    this.productsView.renderSpinner();
    const products = await this.productsModel.loadProducts(this.getCategory());
    this.renderProductsAndPagination(products);
    this.loadOnSearchBysubmit();
  }

  resetPageByCategoryChange() {
    if (this.prevLoadCriteria !== this.getCategory()) {
      this.productsModel.pagination.page = 1;
      this.prevLoadCriteria = this.getCategory();
    }
  }

  loadProductsOnPageChange() {
    this.paginationView.addHandlerClick((page) => {
      this.productsModel.pagination.page = page;
      if (this.showingCategoryResults) {
        this.loadProducts();
      } else {
        this.loadSearch(this.searchTerm);
      }
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

  async loadSearch(searchTerm) {
    this.resetPageBySearchChange(searchTerm);
    this.productsView.renderSpinner();
    const products = await this.productsModel.getBySearchTerm(searchTerm);
    this.renderProductsAndPagination(products);
  }

  loadOnSearchBysubmit() {
    this.productsView.onSearch(async (searchTerm) => {
      this.searchTerm = searchTerm;
      this.showingCategoryResults = false;
      this.loadSearch(this.searchTerm);
    });
  }

  resetPageBySearchChange(searchTerm) {
    if (this.prevLoadCriteria !== searchTerm) {
      this.productsModel.pagination.page = 1;
      this.prevLoadCriteria = searchTerm;
    }
  }

  renderProductsAndPagination(products) {
    this.productsView.renderProducts(products);
    this.paginationView.init();
    this.loadPagination();
    this.loadProductsOnPageChange();
  }
}

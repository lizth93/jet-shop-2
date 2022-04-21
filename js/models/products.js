import { CATEGORIES } from "../controllers/products-constants";
import { API_URL, RES_PER_PAGE } from "../config";
import { fetchApi } from "../helpers";

export default class ProductsModel {
  pagination = {
    total: 0,
    page: 1,
    pages: 0,
    skip: 0,
    limit: RES_PER_PAGE,
  };

  async loadProducts(category) {
    const paginationQueryParams = this.getPaginationQueryParams();

    const url =
      category.toLowerCase() === CATEGORIES.All
        ? `${API_URL}?${paginationQueryParams}`
        : `${API_URL}/category/${category}?${paginationQueryParams}`;

    const data = await fetchApi(url);
    this.pagination.total = data.total;
    this.calculatePages();

    return data.products.map((x) => ({
      id: x.id,
      title: x.title,
      image: x.thumbnail,
      description: x.description,
      stock: x.stock,
      discount: x.discountPercentage,
      brand: x.brand,
      price: x.price,
    }));
  }

  async getBySearchTerm(searchTerm, page = this.pagination.page) {
    const paginationQueryParams = this.getPaginationQueryParams(page);

    const data = await fetchApi(
      `${API_URL}/search?q=${searchTerm}&${paginationQueryParams}`
    );
    this.pagination.total = data.total;
    console.log(this.pagination.total, "from search total pagination");
    return data.products.map((x) => {
      return {
        id: x.id,
        title: x.title,
        image: x.thumbnail,
        description: x.description,
        stock: x.stock,
        discount: x.discountPercentage,
        brand: x.brand,
        price: x.price,
      };
    });
  }

  getPaginationQueryParams() {
    const skip =
      this.pagination.page === 1
        ? 0
        : this.pagination.page * this.pagination.limit;

    // if (total < skip) {
    //   skip = this.pagination.limit;
    // }
    return `limit=${this.pagination.limit}&skip=${skip}`;
  }

  calculatePages() {
    this.pagination.pages = Math.ceil(
      this.pagination.total / this.pagination.limit
    );
  }
}

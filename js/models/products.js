import { CATEGORIES } from '../controllers/products-constants'
import { API_URL } from '../config'
import { fetchApi } from '../helpers'

export default class ProductsModel {
  async loadProducts(category) {
    const url = category === CATEGORIES.All ? API_URL : `${API_URL}/category/${category}`;
    const data = await fetchApi(url);

    return data.products.map((x) => ({
      id: x.id,
      title: x.title,
      image: x.thumbnail,
      description: x.description,
      stock: x.stock,
      discount: x.discountPercentage,
      brand: x.brand,
      price: x.price,
    }))
  }

  async getBySearchTerm(searchTerm) {
    const data = await fetchApi(`${API_URL}/search?q=${searchTerm}`);

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
}

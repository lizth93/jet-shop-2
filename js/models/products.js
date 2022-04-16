import { CATEGORIES } from '../controllers/products-constants'
import { API_URL } from '../config'
import { fetchApi } from '../helpers'

export default class ProductsModel {
  async loadProducts(category) {
    const url = category === CATEGORIES.All ? API_URL : `${API_URL}/category/${category}`;
    const data = await fetchApi(url);

    return data.products.map((product) => ({
      id: product.id,
      title: product.title,
      image: product.thumbnail,
      description: product.description,
      stock: product.stock,
      discount: product.discountPercentage,
      brand: product.brand,
      price: product.price,
    }))
  }
}

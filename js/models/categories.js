import { CATEGORIES } from '../controllers/categories-constants'
import { API_URL } from '../config'
import { fetchApi } from '../helpers'

export default class CategoriesModel {
  async loadCategory(category) {
    const url = CATEGORIES.All ? API_URL : `${API_URL}/category/${category}`;
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

import { API_URL } from '../config'
import { fetchApi } from '../helpers'

export default class ProductDetailModel {
  async loadProduct(id) {
    const data = await fetchApi(`${API_URL}/${id}`);

    return {
      id: data.id,
      title: data.title,
      image: data.thumbnail,
      description: data.description,
      stock: data.stock,
      discount: data.discountPercentage,
      brand: data.brand,
      price: data.price,
      images: data.images,
    }
  }
}


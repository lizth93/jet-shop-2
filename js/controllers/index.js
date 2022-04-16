import ProductsCtrl from './products'
import ProductsView from '../views/products'
import ProductsModel from '../models/products'

export default class MainCtrl {
  constructor() {
    this.productsCtrl = new ProductsCtrl(
      new ProductsView(),
      new ProductsModel(),
    )
  }

  start() {
    this.productsCtrl.loadCategories()
  }

  loadCategoriesOnHashChange() {
    window.addEventListener('hashchange', () => {
      this.productsCtrl.loadCategories()
    })
  }
}

const mainCtrl = new MainCtrl()
mainCtrl.start()
mainCtrl.loadCategoriesOnHashChange()

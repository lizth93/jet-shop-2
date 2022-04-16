import CategoriesCtrl from './categories'
import CategoriesView from '../views/categories'
import CategoriesModel from '../models/categories'

export default class MainCtrl {
  constructor() {
    this.categoriesCtrl = new CategoriesCtrl(
      new CategoriesView(),
      new CategoriesModel(),
    )
  }

  start() {
    this.categoriesCtrl.loadCategories()
  }
}

const mainCtrl = new MainCtrl()
mainCtrl.start()

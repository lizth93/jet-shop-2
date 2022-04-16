import Router from './router'
import ProductsCtrl from './controllers/products'
import ProductsView from './views/products'
import ProductsModel from './models/products'

export default class AppStartup {
  constructor() {
    this.router = new Router(
      new ProductsCtrl(
        new ProductsView(),
        new ProductsModel(),
      )
    )
  }

  start() {
    this.router.start()
  }
}

const mainCtrl = new AppStartup()
mainCtrl.start()

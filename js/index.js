import Router from './router'
import ProductsCtrl from './controllers/products'
import ProductsView from './views/products'
import ProductsModel from './models/products'
import ProductDetailCtrl from './controllers/product-detail'
import ProductDetailView from './views/product-detail'
import ProductDetailModel from './models/product-detail'

export default class AppStartup {
  constructor() {
    this.router = new Router(
      new ProductsCtrl(
        new ProductsView(),
        new ProductsModel(),
      ),
      new ProductDetailCtrl(
        new ProductDetailView(),
        new ProductDetailModel()
      )
    )
  }

  start() {
    this.router.start()
  }

}

const mainCtrl = new AppStartup()
mainCtrl.start()

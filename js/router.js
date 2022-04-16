export default class Router {
  constructor(productsCtrl) {
    this.productsCtrl = productsCtrl
  }

  start() {
    this.routing()

    window.addEventListener('hashchange', () => {
      this.routing()
    })
  }

  routing() {
    const path = window.location.hash.replace("#", "")
    const isProductId = !isNaN(parseInt(path))

    if (isProductId) {
      // TODO: here call the ProductCtrl (singular)
    } else {
      this.productsCtrl.loadCategories()
    }
  }
}

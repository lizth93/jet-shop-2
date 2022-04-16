import "core-js/stable";
import "regenerator-runtime/runtime"; //is for pollyfilling som characteristincs and import them
import * as model from "./model.js";
import productsView from "./views/productsView.js";
import searchView from "./views/searchView.js";
import categoriesView from "./views/categoriesView.js";
import paginationView from "./views/paginationView.js";

const controlSearchResults = async function () {
  try {
    productsView.renderSpinner();
    //1. get the query
    const query = searchView.getQuery();
    if (!query) return;

    //2. load results
    await model.loadSearchResults(query);

    //3. render results
    productsView.render(model.getProductsResultsPage(1));

    //4. render initial pagination buttons
    paginationView.render(model.state.search);

    paginationView.addHandlerClick(controlPagination);
    categoriesView.addHandlerRenderDetails(controlDetailsForProduct); ///////////////////
  } catch (err) {
    console.error(err);
  }
};

const controlSearchCategory = async function () {
  try {
    productsView.renderSpinner();

    const categoryId = categoriesView.getCategory();

    if (!categoryId) return;

    console.log(typeof categoryId, "printing CAtegory");
    if (categoryId === "All") {
      await model.loadProductsCategory(categoryId);

      productsView.render(model.getCategoriesResultsPage(1));
      paginationView.renderCategoriesPerPageAll(model.state.search);
    }

    if (
      categoryId === "Smartphones" ||
      categoryId === "Laptops" ||
      categoryId === "Skincare" ||
      categoryId === "Fragrances" ||
      categoryId === "Groceries"
    ) {
      await model.loadProductsCategory(categoryId);

      productsView.render(model.getCategoriesResultsPage(1));
      paginationView.renderCategoriesPerPageNoAll(model.state.search);
    }

    paginationView.addHandlerClick(controlPaginationByCategory);
    categoriesView.addHandlerRenderDetails(controlDetailsForProduct);
  } catch (err) {
    console.error(err);
  }
};

const controlDetailsForProduct = async function (productId) {
  try {
    productsView.renderSpinner();

    if (!productId) return;

    await model.loadDetailProduct(productId);
    productsView.renderDetails(model.state.search.product);

    categoriesView.addHandlerRenderImages(controlDetailsForProduct);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goToPage) {
  productsView.render(model.getProductsResultsPage(goToPage));
  paginationView.render(model.state.search);
  categoriesView.addHandlerRenderDetails(controlDetailsForProduct);
};

const controlPaginationByCategory = function (goToPage) {
  const categoryId = categoriesView.getCategory();
  if (categoryId != "All") {
    productsView.render(model.getCategoriesResultsPage(goToPage));
    paginationView.renderCategoriesPerPageNoAll(model.state.search);
  }

  if (categoryId === "All") {
    productsView.render(model.getCategoriesResultsPage(goToPage));
    paginationView.renderCategoriesPerPageAll(model.state.search);
  }
  categoriesView.addHandlerRenderDetails(controlDetailsForProduct);
};

const init = function () {
  searchView.addHandlerSearch(controlSearchResults);
  categoriesView.addHandlerCategories(controlSearchCategory);
  categoriesView.addHandlerRenderDetails(controlDetailsForProduct);
};

init();

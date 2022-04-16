import { API_URL, RES_PER_PAGE } from "./config";
import { fetchApi } from "./helpers";
import categoriesView from "./views/v1/categoriesView.js";

export const state = {
  search: {
    products: [],
    query: "",
    categoryHash: "",
    category: [],
    results: [],
    product: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await fetchApi(`${API_URL}/search?q=${query}`);

    state.search.results = data.products.map((product) => {
      return {
        id: product.id,
        title: product.title,
        image: product.thumbnail,
        description: product.description,
        stock: product.stock,
        discount: product.discountPercentage,
        brand: product.brand,
        price: product.price,
      };
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const loadProductsCategory = async function (category) {
  try {
    state.search.categoryHash = category;
    let data;

    if (category === "All") {
      data = await fetchApi(`${API_URL}`);

      state.search.products = data.products.map((product) => {
        return {
          id: product.id,
          title: product.title,
          image: product.thumbnail,
          description: product.description,
          stock: product.stock,
          discount: product.discountPercentage,
          brand: product.brand,
          price: product.price,
        };
      });
    }

    if (category !== "All") {
      data = await fetchApi(`${API_URL}/category/${category}`);

      state.search.category = data.products.map((product) => {
        return {
          id: product.id,
          title: product.title,
          image: product.thumbnail,
          description: product.description,
          stock: product.stock,
          discount: product.discountPercentage,
          brand: product.brand,
          price: product.price,
        };
      });
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const loadDetailProduct = async function (id) {
  try {
    const data = await fetchApi(`${API_URL}/${id}`);
    console.log("model:", id);
    state.search.product = {
      id: data.id,
      title: data.title,
      image: data.thumbnail,
      description: data.description,
      stock: data.stock,
      discount: data.discountPercentage,
      brand: data.brand,
      price: data.price,
      images: data.images,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getProductsResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export const getCategoriesResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  const categoryId = categoriesView.getCategory();
  if (categoryId != "All") {
    return state.search.category.slice(start, end);
  }

  if (categoryId === "All") {
    console.log(state.search.products.slice(start, end));
    return state.search.products.slice(start, end);
  }
};

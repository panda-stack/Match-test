import axios from "axios";

export const state = () => ({
  products: [],
  categories: [],
  filterData: [],
  // favouriteData: [],
  totalPage: 0,
  currentPage: 0
});

const getters = {
  getProducts: state => state.filterData,
  getCategories: state => state.categories,
  // getFavourites: state => state.favouriteData,
  getTotalPage: state => state.totalPage,
  getCurrentPage: state => state.currentPage
};

const mutations = {
  setData(state, payload) {
    state.products = payload.data;
    state.filterData = payload.data;
    const uniqueCategories = [];
    payload.data.forEach(product => {
      if (!uniqueCategories.includes(product.catname)) {
        uniqueCategories.push(product.catname);
      }
    });
    state.categories = uniqueCategories;
    state.currentPage = payload.current_page;
    state.totalPage = payload.last_page;
  },
  setProducts(state, payload) {
    if (payload === "") {
      state.filterData = state.products;
    } else {
      const temp = state.products.filter(
        product => product.catname === payload
      );
      state.filterData = temp;
    }
  },
  searchProducts(state, payload) {
    const temp = state.products.filter(product =>
      product.name.toLowerCase().includes(payload)
    );
    state.filterData = temp;
  },
  sortProducts(state, payload) {
    state.filterData.sort((a, b) => a[payload] - b[payload]);
  }
  // addFavourite(state, payload) {
  //   let sign = false;
  //   state.favouriteData.forEach(product => {
  //     if (product.name === payload.name) sign = true;
  //   });
  //   if (!sign) state.favouriteData.push(payload);
  // },
  // removeFavourite(state, payload) {
  //   const temp = state.favouriteData.filter(
  //     product => product.name != payload.name
  //   );
  //   state.favouriteData = temp;
  // }
};

const actions = {
  async fetchData(state, id) {
    // const API_URL = process.env.VUE_APP_PRODUCT_API_URL;
    const res = await axios.get(
      `https://trayvonnorthern.com/Edgewood-API/public/api/products?page=${id}`
    );
    state.commit("setData", res.data);
  },
  async filterData(state, e) {
    const category = e.target.options[
      e.target.options.selectedIndex
    ].innerText.trim();
    state.commit("setProducts", category);
  },
  async searchData(state, e) {
    const name = e.target.value.toLowerCase();
    state.commit("searchProducts", name);
  },
  async sortData(state, e) {
    const sort_name = e.target.options[
      e.target.options.selectedIndex
    ].value.trim();
    state.commit("sortProducts", sort_name);
  }
  // addFavourite(state, item) {
  //   state.commit("addFavourite", item);
  // },
  // removeFavourite(state, item) {
  //   console.log("remove====>", item);
  //   state.commit("removeFavourite", item);
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
};

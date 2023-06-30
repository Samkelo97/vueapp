import { createStore } from "vuex";

export default createStore({
  state: {
    products: null,
    product: null,
  },

  mutations: {
    setproducts: (state, products) => {
      state.products = products;
    },
    setproduct: (state, product) => {
      state.product = product;
    },
  },

  actions: {
    getproducts: async (context) => {
      fetch("https://Samkelo97.github.io/data/db.json")
        .then((res) => res.json())
        .then((products) => context.commit("setproducts", products));
    },
    getproduct: async (context, id) => {
      fetch("https://Samkelo97.github.io/data/db.json/" + id)
        .then((res) => res.json())
        .then((product) => context.commit("setproduct", product));
    },
  },
});

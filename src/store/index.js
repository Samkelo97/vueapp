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
      fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((products) => context.commit("setproducts", products));
    },
    getproduct: async (context, id) => {
      fetch("http://localhost:3000/products/" + id)
        .then((res) => res.json())
        .then((product) => context.commit("setproduct", product));
    },
  },
});

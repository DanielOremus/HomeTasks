import apiEndpoints from "@/constants/apiEndpoints";
import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      pizzaList: [],
      searchWord: null,
      filteredPizzaList: [],
      loading: false,
      error: false,
    };
  },
  getters: {
    isLoading: (state) => state.loading,
    isError: (state) => state.error,
    pizzaList: (state) => state.pizzaList,

    getPizzaById: (state) => (pizzaId) =>
      state.pizzaList.find((item) => toString(item._id) === toString(pizzaId)),
    getTotalPizzaPrice: (state, getters, rootState, rootGetters) => {
      const cartList = rootGetters["cart/cartList"];
      return cartList.reduce((prevSum, cartItem) => {
        const pizza = state.pizzaList.find(
          (item) => item._id === cartItem.pizzaId
        );
        let multiplier = 0;
        switch (cartItem.size) {
          case 24:
            multiplier = 1;
            break;
          case 36:
            multiplier = 1.7;
            break;
          case 45:
            multiplier = 2.89;
            break;
        }
        return Math.round(prevSum + multiplier * cartItem.count * pizza.price);
      }, 0);
    },

    filteredPizzaList(state) {
      if (state.searchWord) {
        return (state.filteredPizzaList = state.pizzaList.filter((item) =>
          item.title.toLowerCase().includes(state.searchWord.toLowerCase())
        ));
      } else {
        return state.pizzaList;
      }
    },
  },
  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },
    setPizzas(state, data) {
      state.pizzaList = data;
    },
    setError(state, data) {
      state.error = data;
    },
    setSearchWord(state, searchWord) {
      state.searchWord = searchWord;
    },
  },
  actions: {
    loadPizzas({ commit }) {
      commit("setLoading", true);
      commit("setError", false);
      axios
        .get(apiEndpoints.pizzas.getList)
        .then((res) => res.data)
        .then((resData) => {
          if (resData.success) commit("setPizzas", resData.data);
          else throw new Error("Fatch failed!");
        })
        .catch((err) => {
          //Якщо погано
          commit("setError", err);
        })
        .finally(
          //Завжди
          () => commit("setLoading", false)
        );
    },
    setSearchWord({ commit }, newSearchWord) {
      commit("setSearchWord", newSearchWord);
    },
  },
};

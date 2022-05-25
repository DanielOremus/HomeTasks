import { v4 as uuidv4 } from "uuid";
export default {
  namespaced: true,
  state() {
    return {
      cartList: [],
    };
  },
  getters: {
    cartList: (state) => state.cartList,
  },
  mutations: {
    addPizzaToCart(state, data) {
      const pizza = state.cartList.find(
        (item) => item.pizzaId === data.pizzaId
      );
      if (pizza && pizza.size == data.pizzaSize) {
        pizza.count++;
      } else {
        state.cartList.push({
          id: uuidv4(),
          pizzaId: data.pizzaId,
          count: 1,
          size: parseInt(data.pizzaSize),
        });
      }
    },
    onIncrement(state, itemId) {
      const pizza = state.cartList.find((item) => item.id === itemId);
      pizza.count += 1;
    },
    onDecrement(state, itemId) {
      const pizza = state.cartList.find((item) => item.id === itemId);
      if (pizza.count > 1) {
        pizza.count -= 1;
      }
    },
    onDelete(state, itemId) {
      state.cartList = state.cartList.filter((item) => item.id !== itemId);
    },
  },
  actions: {
    addPizzaToCart({ commit }, data) {
      commit("addPizzaToCart", data);
    },
    cartAction({ commit }, payload) {
      switch (payload.type) {
        case "increment":
          commit("onIncrement", payload.value);
          break;
        case "decrement":
          commit("onDecrement", payload.value);
          break;
        case "delete":
          commit("onDelete", payload.value);
          break;
      }
    },
  },
};

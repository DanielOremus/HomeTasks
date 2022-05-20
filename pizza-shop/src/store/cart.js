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
    addPizzaToCart(state, pizzaIdToAdd) {
      const pizza = state.cartList.find(
        (item) => item.pizzaId === pizzaIdToAdd
      );
      if (pizza) {
        pizza.count++;
      } else {
        state.cartList.push({
          id: uuidv4(),
          pizzaId: pizzaIdToAdd,
          count: 1,
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
      console.log(itemId);
      console.log(state.cartList);
    },
  },
  actions: {
    addPizzaToCart({ commit }, pizzaId) {
      commit("addPizzaToCart", pizzaId);
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

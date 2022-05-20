import { v4 as uuidv4 } from "uuid";
export default {
  namespaced: true,
  state() {
    return {
      pizzaList: [
        {
          id: uuidv4(),
          imgSrc: require("@/assets/images/janicsar.png"),
          title: "Health pizza",
          price: 100,
        },
        {
          id: uuidv4(),
          imgSrc: require("@/assets/images/hawai.png"),
          title: "Hawaii pizza",
          price: 200,
        },
        {
          id: uuidv4(),
          imgSrc: require("@/assets/images/calipso.png"),
          title: "Calypso pizza",
          price: 300,
        },
        {
          id: uuidv4(),
          imgSrc: require("@/assets/images/tnt.png"),
          title: "TNT pizza",
          price: 100,
        },
        {
          id: uuidv4(),
          imgSrc: require("@/assets/images/sajtos.png"),
          title: "Cheese pizza",
          price: 100,
        },
        {
          id: uuidv4(),
          imgSrc: require("@/assets/images/mexikoi.png"),
          title: "Mexico pizza",
          price: 100,
        },
        {
          id: uuidv4(),
          imgSrc: require("@/assets/images/csirkemelles.png"),
          title: "Chicken pizza",
          price: 100,
        },
      ],
    };
  },
  getters: {
    pizzaList: (state) => state.pizzaList,
    getPizzaById: (state) => (pizzaId) =>
      state.pizzaList.find((item) => item.id === pizzaId),
    getTotalPizzaPrice: (state, getters, rootState, rootGetters) => {
      const cartList = rootGetters["cart/cartList"];
      return cartList.reduce((prevSum, cartItem) => {
        const pizza = state.pizzaList.find(
          (item) => item.id === cartItem.pizzaId
        );
        return prevSum + pizza.price * cartItem.count;
      }, 0);
    },
  },
  mutations: {},
  actions: {},
};

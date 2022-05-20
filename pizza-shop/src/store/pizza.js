import { v4 as uuidv4 } from "uuid";
export default {
  namespaced: true,
  state() {
    return {
      pizzaList: [
        {
          id: uuidv4(),
          imgSrc:
            "https://admin.kemencespizzeria.hu/media/products/211/211848/large/janicsar.png",
          title: "Health pizza",
          price: 100,
        },
        {
          id: uuidv4(),
          imgSrc:
            "https://admin.kemencespizzeria.hu/media/products/200/200865/large/hawai.png",
          title: "Hawaii pizza",
          price: 200,
        },
        {
          id: uuidv4(),
          imgSrc:
            "https://admin.kemencespizzeria.hu/media/products/211/211842/large/calipso.png",
          title: "Calypso pizza",
          price: 300,
        },
        {
          id: uuidv4(),
          imgSrc:
            "https://admin.kemencespizzeria.hu/media/products/201/201407/large/tnt.png",
          title: "TNT pizza",
          price: 100,
        },
        {
          id: uuidv4(),
          imgSrc:
            "https://admin.kemencespizzeria.hu/media/products/201/201366/large/sajtos.png",
          title: "Cheese pizza",
          price: 100,
        },
        {
          id: uuidv4(),
          imgSrc:
            "https://admin.kemencespizzeria.hu/media/products/201/201401/large/mexikoi.png",
          title: "Mexico pizza",
          price: 100,
        },
        {
          id: uuidv4(),
          imgSrc:
            "https://admin.kemencespizzeria.hu/media/products/201/201422/large/csirkemelles.png",
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
    getTotalPizzaPrice: (state) =>
      state.cartList.reduce((prevSum, cartItem) => {
        const pizza = state.pizzaList.find(
          (item) => item.id === cartItem.pizzaId
        );
        return prevSum + pizza.price * cartItem.count;
      }, 0),
  },
  mutations: {},
  actions: {},
};

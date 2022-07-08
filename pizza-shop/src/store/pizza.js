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
          description:
            "The Janicsár pizza dough is spread with a sour cream base and topped with sheep's cheese, gyros meat, red onion and paprika",
          price: 100,
        },
        {
          id: uuidv4(),
          imgSrc: require("@/assets/images/hawai.png"),
          title: "Hawaii pizza",
          description:
            "Hawaiian pizza is also made with a tomato pizza base, lots of ham, corn, pineapple and cheese. It owes its sweet and sour taste",
          price: 200,
        },
        {
          id: uuidv4(),
          imgSrc: require("@/assets/images/calipso.png"),
          title: "Calypso pizza",
          description:
            "Spread the Calypso pizza dough with sour cream and tuna, tomatoes, olives, cheese and mushrooms",
          price: 300,
        },
        {
          id: uuidv4(),
          imgSrc: require("@/assets/images/tnt.png"),
          title: "TNT pizza",
          description:
            "Our TNT pizza is really good. Smoked ribs, bacon, sausage and if all that wasn't enough, beans, onions, chili",
          price: 100,
        },
        {
          id: uuidv4(),
          imgSrc: require("@/assets/images/sajtos.png"),
          title: "Cheese pizza",
          description:
            "Cheese pizza is made with a tomato pizza base. We use a combination of 3 types of cheese, especially for cheese lovers",
          price: 100,
        },
        {
          id: uuidv4(),
          imgSrc: require("@/assets/images/mexikoi.png"),
          title: "Mexico pizza",
          description:
            "A Mexikói pizzánk bőséges feltétei önmagukért beszélnek - paradicsomos pizza alap, sonka, bacon, kukorica",
          price: 100,
        },
        {
          id: uuidv4(),
          imgSrc: require("@/assets/images/csirkemelles.png"),
          title: "Chicken pizza",
          description:
            "We also prepared our chicken pizzas with a sour cream base for those who don't like the tomato pizza base",
          price: 100,
        },
      ],
      searchWord: null,
      filteredPizzaList: [],
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
    setSearchWord(state, searchWord) {
      state.searchWord = searchWord;
    },
  },
  actions: {
    setSearchWord({ commit }, newSearchWord) {
      commit("setSearchWord", newSearchWord);
    },
  },
};

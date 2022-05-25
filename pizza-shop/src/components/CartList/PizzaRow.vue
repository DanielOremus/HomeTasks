<template>
  <div class="pizza-row-container">
    <div>
      <img :src="pizza.imgSrc" alt="" />
    </div>
    <div>
      {{ pizza.title }} | {{ pizza.price * cartItem.count * multiplier }} грн |
      {{ cartItem.size }} см
    </div>
    <div>
      <v-btn small @click="onDecrement">-</v-btn>
      <span>{{ cartItem.count }}</span>
      <v-btn small @click="onIncrement">+</v-btn>
      <v-btn small @click="onDelete">x</v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "PizzaRow",
  props: {
    cartItem: {
      type: Object,
      default: null,
    },
  },
  computed: {
    ...mapGetters("pizza", ["getPizzaById", "getMultiplier"]),
    pizza() {
      return this.getPizzaById(this.cartItem.pizzaId);
    },
    multiplier() {
      switch (this.cartItem.size) {
        default:
          return 1;
        case 36:
          return 1.7;
        case 45:
          return 2.89;
      }
    },
  },

  methods: {
    ...mapActions("cart", ["cartAction"]),
    onDecrement() {
      this.cartAction({
        value: this.cartItem.id,
        type: "decrement",
      });
    },
    onIncrement() {
      this.cartAction({
        value: this.cartItem.id,
        type: "increment",
      });
    },
    onDelete() {
      this.cartAction({
        value: this.cartItem.id,
        type: "delete",
      });
    },
  },
};
</script>

<style lang="css" scoped>
.pizza-row-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  border: 2px solid black;
}
.pizza-row-container img {
  width: 80px;
}
</style>

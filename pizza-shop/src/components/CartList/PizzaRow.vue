<template>
  <div class="pizza-row-container">
    <div>
      <img :src="pizza.imgSrc" alt="" />
    </div>
    <div>{{ pizza.title }} | {{ pizza.price }} грн</div>
    <div>
      <button @click="onDecrement">-</button>
      <span>{{ cartItem.count }}</span>
      <button @click="onIncrement">+</button>
      <button @click="onDelete">x</button>
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
    ...mapGetters("pizza", ["getPizzaById"]),
    pizza() {
      return this.getPizzaById(this.cartItem.pizzaId);
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
}
.pizza-row-container img {
  width: 50px;
}
</style>

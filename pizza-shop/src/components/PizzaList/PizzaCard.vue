<template>
  <div class="card-container">
    <div><img :src="pizza.imgSrc" alt="" /></div>
    <div>{{ pizza.title }}</div>
    <div>{{ pizza.price }} грн</div>
    <div><button @click="onAdd">+</button></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PizzaCard",
  props: {
    pizza: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions("cart", ["addPizzaToCart"]),
    onAdd() {
      this.addPizzaToCart(this.pizza.id);
    },
  },
};
</script>

<style lang="css" scoped>
.card-container {
  width: 150px;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px;
  margin: 20px;
}
.card-container img {
  width: 130px;
}
</style>

<template>
  <div class="card-container">
    <div><img :src="pizza.imgSrc" alt="" /></div>
    <div>{{ pizza.title }}</div>
    <div>{{ pizza.price * multiplier }} грн</div>
    <div>
      <v-radio-group v-model="size" height="20px">
        <v-radio :value="24" label="24 cм"></v-radio>
        <v-radio :value="36" label="36 cм"></v-radio>
        <v-radio :value="45" label="45 cм"></v-radio>
      </v-radio-group>
    </div>
    <div><v-btn @click="onAdd" :disabled="!this.size">+</v-btn></div>
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
  data() {
    return {
      size: null,
    };
  },
  computed: {
    multiplier() {
      switch (this.size) {
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
    ...mapActions("cart", ["addPizzaToCart"]),
    onAdd() {
      const data = {
        pizzaId: this.pizza.id,
        pizzaSize: this.size,
      };
      this.addPizzaToCart(data);
    },
  },
};
</script>

<style lang="css" scoped>
.card-container {
  width: 200px;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px;
  margin: 20px;
  text-align: center;
}
.card-container img {
  width: 130px;
}
</style>

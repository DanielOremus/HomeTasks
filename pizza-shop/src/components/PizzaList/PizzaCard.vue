<template>
  <div class="card-container">
    <div><img :src="pizza.imgSrc" alt="" /></div>
    <div class="pizza-title">
      {{ pizza.title }}
    </div>
    <div class="pizza-description">{{ pizza.description }}</div>
    <div class="pizza-price">{{ pizza.price * multiplier }} грн</div>
    <div class="radio-buttons">
      <v-radio-group v-model="size">
        <v-radio :value="24" label="24 cм"></v-radio>
        <v-radio :value="36" label="36 cм"></v-radio>
        <v-radio :value="45" label="45 cм"></v-radio>
      </v-radio-group>
    </div>
    <v-btn @click="onAdd" :disabled="!this.size" id="btn">Add to Card</v-btn>
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

<style scoped src="@/assets/styles/pizza-card.css"></style>

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

<style lang="css" scoped>
.card-container {
  border: 4px solid transparent;
  padding: 15px;
  text-align: center;
  background-image: url("@/assets/images/card-bg.png");
  background-repeat: repeat;
  transition: 0.4s;
}

.card-container:hover {
  background-image: linear-gradient(rgb(67, 67, 67), rgb(67, 67, 67));
  border: 4px solid #fdbc2c;
}
.card-container img {
  width: 250px;
}
#btn {
  margin-top: -30px;
  background-color: #fdbc2c;
  font-style: black;
  width: 200px;
}
.pizza-title {
  font: 22px Arial;
  color: #fdbc2c;
}
.pizza-price {
  font: 28px Tahoma;
  color: #d94f2b;
}
.pizza-description {
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-left: 5px;
  margin-right: 5px;

  font: 15px sans-serif;
  color: white;
}
.radio-buttons {
  color: white;
}
</style>

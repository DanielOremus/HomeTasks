<template>
  <tr class="pizza-row-container">
    <td><button class="sub-delete" @click="onDelete">x</button></td>
    <td>
      <img :src="pizza.imgSrc" alt="" />
    </td>
    <td>{{ pizza.title }}</td>
    <td>{{ Math.round(pizza.price * multiplier) }} грн</td>
    <td>{{ cartItem.size }} см</td>

    <td><button class="sub-delete" @click="onDecrement">--</button></td>
    <td>
      {{ cartItem.count }}
    </td>
    <td><button class="add" @click="onIncrement">+</button></td>
    <td>{{ Math.round(pizza.price * cartItem.count * multiplier) }} грн</td>
  </tr>
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
          return 1.4;
        case 45:
          return 2.3;
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

<style lang="css" scoped src="@/assets/styles/pizza-row.css"></style>

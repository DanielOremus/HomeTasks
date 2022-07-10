<template>
  <div v-if="cartList.length" class="cart-list-body">
    <table>
      <tr>
        <th></th>
        <th>Picture</th>
        <th>Title</th>
        <th>Price per one</th>
        <th>Size</th>
        <th></th>
        <th>Count</th>
        <th></th>
        <th>Total Price</th>
      </tr>
      <pizza-row
        v-for="item in cartList"
        :key="item.id"
        :cart-item="item"
        class="pizza-row"
      ></pizza-row>
    </table>
  </div>
  <div v-else>Cart is Empty :(</div>
</template>

<script>
import PizzaRow from "@/components/CartList/PizzaRow.vue";
import { mapGetters } from "vuex";
export default {
  name: "CartList",
  components: {
    PizzaRow,
  },
  computed: {
    ...mapGetters("cart", ["cartList"]),
  },
};
</script>

<style lang="css" scoped src="@/assets/styles/cart-list.css"></style>

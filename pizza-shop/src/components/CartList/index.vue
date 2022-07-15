<template>
  <div class="cart-list-body">
    <table>
      <tr>
        <th class="empty-th"></th>
        <th>Picture</th>
        <th>Title</th>
        <th>Price</th>
        <th>Size</th>
        <th class="empty-th"></th>
        <th>Count</th>
        <th class="empty-th"></th>
        <th>Total Price</th>
      </tr>
      <pizza-row
        v-for="item in cartList"
        :key="item.id"
        :cart-item="item"
      ></pizza-row>
      <tr class="last-tr" v-if="cartList.length">
        <td colspan="7" @click="onClear"><button>Clear the Cart</button></td>
        <td>Total:</td>
        <td>{{ getTotalPizzaPrice }} грн</td>
      </tr>
    </table>
    <div v-if="!cartList.length" class="empty-cart-lable">
      Cart is Empty. Please, choose some product.
    </div>
  </div>
</template>

<script>
import PizzaRow from "@/components/CartList/PizzaRow.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CartList",
  components: {
    PizzaRow,
  },
  computed: {
    ...mapGetters("cart", ["cartList"]),
    ...mapGetters("pizza", ["getTotalPizzaPrice"]),
  },
  methods: {
    ...mapActions("cart", ["clearCartAction"]),
    onClear() {
      this.clearCartAction();
    },
  },
};
</script>

<style lang="css" scoped src="@/assets/styles/cart-list.css"></style>

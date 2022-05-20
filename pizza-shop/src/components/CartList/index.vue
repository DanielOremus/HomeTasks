<template>
  <div v-if="cartList.length">
    <pizza-row
      v-for="item in cartList"
      :key="item.id"
      :cart-item="item"
    ></pizza-row>
  </div>
  <div v-else>Корзина пуста :(</div>
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

<style lang="scss" scoped></style>

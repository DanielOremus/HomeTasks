<template>
  <div>
    <main-master-page>
      <h1>Cart</h1>
      <div>
        <router-link to="/">Home</router-link>
        <div v-if="cartList.length">Всього: {{ getTotalPizzaPrice }} грн</div>
      </div>
      <cart-list />
    </main-master-page>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import CartList from "@/components/CartList";
export default {
  name: "CartPage",
  components: {
    MainMasterPage,
    CartList,
  },
  computed: {
    ...mapGetters("pizza", ["getTotalPizzaPrice"]),
    ...mapGetters("cart", ["cartList"]),
  },
};
</script>

<style lang="scss" scoped></style>

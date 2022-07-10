<template>
  <div class="body">
    <main-master-page>
      <div class="container">
        <div class="content-lable">Cart Content</div>
        <div>
          <cart-list />
        </div>
      </div>
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
  },
};
</script>

<style lang="css" scoped src="@/assets/styles/cart-page.css"></style>

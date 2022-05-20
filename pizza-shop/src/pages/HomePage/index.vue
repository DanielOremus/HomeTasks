<template>
  <div>
    <main-master-page>
      <h1>Home</h1>
      <div>
        <router-link to="/cart">Go to Cart</router-link>
        <div>Всього: {{ getTotalPizzaPrice }} грн</div>
      </div>
      <pizza-list />
    </main-master-page>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import PizzaList from "@/components/PizzaList";
export default {
  name: "HomePage",
  components: {
    MainMasterPage,
    PizzaList,
  },
  computed: {
    ...mapGetters("pizza", ["getTotalPizzaPrice"]),
  },
};
</script>

<style lang="scss" scoped></style>

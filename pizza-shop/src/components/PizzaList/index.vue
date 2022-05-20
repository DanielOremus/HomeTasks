<template>
  <div class="container">
    <pizza-card v-for="pizza in pizzaList" :key="pizza.id" :pizza="pizza" />
  </div>
</template>

<script>
import PizzaCard from "@/components/PizzaList/PizzaCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "PizzaList",
  components: {
    PizzaCard,
  },
  computed: {
    ...mapGetters("pizza", ["pizzaList"]),
  },
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>

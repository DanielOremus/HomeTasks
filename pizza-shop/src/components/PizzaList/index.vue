<template>
  <div class="container">
    <pizza-card
      v-for="pizza in filteredPizzaList"
      :key="pizza.id"
      :pizza="pizza"
    />
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
    ...mapGetters("pizza", ["filteredPizzaList"]),
  },
};
</script>

<style lang="css" scoped>
.container {
  display: grid;
  grid-template-columns: 300px 300px 300px;
  justify-content: center;
}
</style>

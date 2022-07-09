<template>
  <div class="container">
    <pizza-card v-for="pizza in pizzaList" :key="pizza._id" :pizza="pizza" />
  </div>
</template>

<script>
import PizzaCard from "@/components/PizzaList/PizzaCard.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PizzaList",
  components: {
    PizzaCard,
  },
  computed: {
    ...mapGetters("pizza", ["pizzaList"]),
  },
  methods: {
    ...mapActions("pizza", ["loadPizzas"]),
  },
  mounted() {
    this.loadPizzas();
  },
};
</script>

<style lang="css" scoped src="@/assets/styles/pizza-list.css"></style>

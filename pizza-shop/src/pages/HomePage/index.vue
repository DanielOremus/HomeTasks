<template>
  <div>
    <main-master-page>
      <h1>Home</h1>
      <div>
        <router-link to="/cart">Go to Cart</router-link>
        <div>Всього: {{ getTotalPizzaPrice }} грн</div>
      </div>
      <div class="searchArea">
        <v-text-field label="Search pizza" v-model="searchWord"></v-text-field>
      </div>
      <pizza-list />
    </main-master-page>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import PizzaList from "@/components/PizzaList";
export default {
  name: "HomePage",
  components: {
    MainMasterPage,
    PizzaList,
  },
  data() {
    return {
      searchWord: null,
    };
  },
  computed: {
    ...mapGetters("pizza", ["getTotalPizzaPrice"]),
  },
  watch: {
    searchWord(newValue) {
      this.setSearchWord(newValue);
    },
  },
  methods: {
    ...mapActions("pizza", ["setSearchWord"]),
  },
};
</script>

<style lang="css" scoped>
.searchArea {
  margin-left: 50px;
  margin-right: 50px;
}
</style>

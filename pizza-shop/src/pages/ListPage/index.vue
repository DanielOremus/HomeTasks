<template>
  <div>
    <main-master-page>
      <h4>List</h4>
      <div>
        <div>Total: {{ getTotalPizzaPrice }} грн</div>
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
  margin-left: 300px;
  margin-right: 300px;
}
</style>

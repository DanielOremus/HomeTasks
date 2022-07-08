<template>
  <div class="header">
    <main-master-page>
      <div class="title-total">
        <h4>List</h4>
        <div>
          <div>Total: {{ getTotalPizzaPrice }} грн</div>
          <br />
        </div>
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
  color: white;
  background-image: url("@/assets/images/card-bg.png");
  background-repeat: repeat;
  margin-left: 376px;
  margin-right: 376px;
  border-left: 4px solid rgb(40, 40, 40);
  border-right: 4px solid rgb(40, 40, 40);
  border-top: 4px solid rgb(40, 40, 40);

  border-bottom: 4px solid #d94f2b;
}
.header {
  background-image: url("@/assets/images/list-bg.jpg");
  background-size: cover;
}
.title-total {
  background-image: url("@/assets/images/card-bg.png");
  background-repeat: repeat;
  color: white;
}
</style>

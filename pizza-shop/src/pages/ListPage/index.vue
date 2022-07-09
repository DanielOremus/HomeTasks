<template>
  <div class="body">
    <main-master-page>
      <pizza-list />
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import PizzaList from "@/components/PizzaList";
export default {
  name: "HomePage",
  components: {
    MainMasterPage,
    PizzaList,
  },
};
</script>

<style lang="css" scoped src="@/assets/styles/list-page.css"></style>

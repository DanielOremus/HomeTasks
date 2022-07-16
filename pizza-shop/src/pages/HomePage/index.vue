<template>
  <div class="body">
    <main-master-page>
      <div class="container">
        Want to taste delicious pizza?<br />
        We have good news! <br />
        ↓ Just click a button below ↓
      </div>
      <div><v-btn id="btn" @click="$router.push('/list')">Click</v-btn></div>
    </main-master-page>
  </div>
</template>
<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
export default {
  name: "HomePage",
  components: {
    MainMasterPage,
  },
};
</script>

<style lang="css" scoped src="@/assets/styles/home-page.css"></style>

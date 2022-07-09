<template>
  <div class="body">
    <main-master-page>
      <div class="container">
        <div class="fields">
          <login-field></login-field>
        </div>
        <div class="line"></div>
        <div class="fields"><register-field></register-field></div>
      </div>
    </main-master-page>
  </div>
</template>
<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import LoginField from "@/components/LoginField";
import RegisterField from "@/components/RegisterField";
export default {
  name: "HomePage",
  components: {
    MainMasterPage,
    LoginField,
    RegisterField,
  },
};
</script>

<style lang="css" scoped src="@/assets/styles/home-page.css"></style>

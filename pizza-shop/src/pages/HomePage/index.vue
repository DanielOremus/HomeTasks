<template>
  <div>
    <main-master-page>
      <h4>Please sign in to your account</h4>
      <div class="container">
        <div>
          <h4>Sign in</h4>
          <br />
          <v-form ref="form" class="form">
            <label for=""
              >Login
              <v-text-field
                v-model="login"
                label="Enter your Login"
                required
              ></v-text-field>
            </label>
            <label for=""
              >Password
              <v-text-field
                v-model="password"
                label="Enter your Password"
                required
              ></v-text-field>
            </label>

            <v-btn class="btn">Sign in</v-btn>
          </v-form>
        </div>
        <div class="line"></div>
        <div>
          <h4>Sign up</h4>
          <br />
          <v-form ref="form" class="form">
            <label for=""
              >Create Login
              <v-text-field
                v-model="newLogin"
                label="Enter Login"
                required
              ></v-text-field>
            </label>
            <label for=""
              >Create Password
              <v-text-field
                v-model="newPsassword"
                label="Enter Password"
                required
              ></v-text-field>
            </label>

            <v-btn class="btn">Sign up</v-btn>
          </v-form>
        </div>
      </div>
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
  data() {
    return {
      login: null,
      password: null,
      newLogin: null,
      email: null,
      newPasswordL: null,
    };
  },
};
</script>

<style lang="css" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 3px 1fr;
}
.form {
  margin-left: 200px;
  margin-right: 200px;
}
.btn {
  margin-bottom: 30px;
}
.line {
  border-left: 3px solid black;
  height: 250px;
  margin-top: auto;
  margin-bottom: auto;
}
</style>

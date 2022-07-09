<template>
  <div class="">
    <br />
    <h4>Please sign in to your account</h4>
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
            variant="outlined"
          ></v-text-field>
        </label>
        <label for=""
          >Password
          <v-text-field
            v-model="password"
            label="Enter your Password"
            required
            variant="outlined"
          ></v-text-field>
        </label>

        <v-btn class="btn">Sign in</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginField",
  data() {
    return {
      login: null,
      password: null,
    };
  },
};
</script>

<style
  lang="css"
  scoped
  src="@/assets/styles/login-register-fields.css"
></style>

<template>
  <div class="">
    <br />
    <h4>Don't have account? Just register here</h4>
    <h4>Sign up</h4>
    <br />
    <v-form ref="form" class="form">
      <label for=""
        >Create Login
        <v-text-field
          v-model="newLogin"
          label="Enter Login"
          required
          variant="outlined"
        ></v-text-field>
      </label>
      <label for=""
        >Create Password
        <v-text-field
          v-model="newPsassword"
          label="Enter Password"
          required
          variant="outlined"
        ></v-text-field>
      </label>

      <v-btn class="btn">Register</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "RegisterField",
  data() {
    return {
      newLogin: null,
      newPassword: null,
    };
  },
};
</script>

<style
  lang="css"
  scoped
  src="@/assets/styles/login-register-fields.css"
></style>

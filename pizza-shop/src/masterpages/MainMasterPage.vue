<template>
  <div>
    <div>
      <slot name="header">
        <h2>Моя піцерія</h2>
        <h3>Welcome, customer</h3>
      </slot>
    </div>
    <div>
      <slot> Немає контенту </slot>
    </div>
    <div>
      <slot name="footer">
        <h1>Контакти</h1>
        <ul>
          <li>Телефон: dabee dabee dabee</li>
          <li>Адреса: dabee dabee dabee</li>
        </ul>
      </slot>

      <v-footer class="bg-grey-lighten-1">
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            variant="text"
            class="mx-2"
            rounded="xl"
          >
            {{ link }}
          </v-btn>
          <v-col class="text-center text-white mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-col>
        </v-row>
      </v-footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMasterPage",
  data: () => ({
    links: ["Home", "About Us", "Contact Us"],
  }),
};
</script>

<style lang="scss" scoped></style>

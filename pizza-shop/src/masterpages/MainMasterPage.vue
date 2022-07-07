<template>
  <div>
    <div>
      <slot name="header">
        <h2>Pizzeria</h2>
        <h3>Welcome, customer</h3>
      </slot>
    </div>
    <div>
      <slot> Немає контенту </slot>
    </div>
    <div></div>
    <v-footer class="bg-grey-lighten-1">
      <v-row justify="center" no-gutters>
        <v-btn
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
          @click="$router.push('/')"
          >HOME</v-btn
        >
        <v-btn
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
          @click="$router.push('/list')"
          >LIST</v-btn
        >
        <v-btn
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
          @click="$router.push('/cart')"
          >CART</v-btn
        >

        <v-col class="text-center text-white mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Pizzeria</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "MainMasterPage",
  data: () => ({}),
};
</script>

<style lang="css" scoped>
div {
  text-align: center;
}
</style>

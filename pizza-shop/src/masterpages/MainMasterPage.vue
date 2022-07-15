<template>
  <div class="content">
    <div class="menu-bg">
      <div class="menu">
        <div>
          <img
            :src="pizzaMenuImage"
            alt="Menu"
            @click="$router.push('/list')"
          />
        </div>
        <div class="margin-img"><img :src="saleImage" alt="Sale" /></div>
        <div class="searchArea">
          <v-text-field
            label="Search pizza"
            v-model.lazy="searchWord"
            variant="outlined"
            v-on:keydown.enter="this.setSearchWord(this.searchWord)"
          ></v-text-field>
        </div>
        <div class="margin-img">
          <img :src="logoImage" alt="Logo" @click="$router.push('/')" />
        </div>

        <div class="info">
          <span
            >Information
            <div class="content">
              We are open: <br />
              <br />
              Mon: 09:00 - 22:30 <br />
              Tue: 09:30 - 22:00 <br />
              Wen: 10:00 - 22:30 <br />
              Thu: 09:00 - 22:30 <br />
              Fri: 09:30 - 22:00 <br />
              Sat: 11:00 - 20:00 <br />
              Sun: 11:00 - 20:00
            </div>
          </span>
        </div>
        <div class="contact">
          <span
            >Contact Us
            <div class="content">
              Phone number : 050 000 0000 <br />
              Adress: Uzhhorod, Korzo st.
            </div></span
          >
        </div>
        <div class="total">
          <span
            ><router-link
              to="/cart"
              style="text-decoration: none; color: inherit"
              >Total: {{ getTotalPizzaPrice }} грн</router-link
            ></span
          >
        </div>
      </div>
    </div>
    <div>
      <slot> Немає контенту </slot>
    </div>
    <div></div>
    <v-footer class="footer">
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
          {{ new Date().getFullYear() }} — <strong>Pizza House</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MainMasterPage",
  data() {
    return {
      pizzaMenuImage: require("@/assets/images/pizza-menu.png"),
      saleImage: require("@/assets/images/sale.png"),
      logoImage: require("@/assets/images/pizzeria-logo.png"),
      searchWord: null,
    };
  },
  computed: {
    ...mapGetters("pizza", ["getTotalPizzaPrice"]),
  },

  methods: {
    ...mapActions("pizza", ["setSearchWord"]),
  },
};
</script>

<style lang="css" scoped src="@/assets/styles/master-page.css"></style>

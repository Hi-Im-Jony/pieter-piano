<template>
  <v-app>
    <nav-bar v-if="windowWidth > 599" />
    <nav-two v-if="windowWidth <= 599" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import NavTwo from "./components/navTwo.vue";
export default {
  name: "App",
  components: {
    NavBar,
    NavTwo,
  },
  data: () => ({
    windowWidth: window.innerWidth,
  }),
};
</script>

<style scoped>
* {
  font-size: 16.5px;
  padding: 0px;
  margin: 0px;
  background-color: rgb(29, 27, 27);
}
</style>

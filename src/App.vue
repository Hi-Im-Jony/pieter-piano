<template>
  <v-app>
    <nav-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
  data: () => ({
    //
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

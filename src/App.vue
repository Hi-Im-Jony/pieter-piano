<template>
  <v-app>
    <nav-bar />
    <v-content>
      <router-view />
    </v-content>
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
}
</style>

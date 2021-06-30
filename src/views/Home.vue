<template>
  <div id="homepage">
    <div id="parallax">
      <welcome-text />
      <pros />

      <about />

      <my-footer />
    </div>
  </div>
</template>

<script>
import WelcomeText from "../components/welcome-text.vue";
import Pros from "../components/pros.vue";
import About from "../components/about.vue";
import myFooter from "../components/my-footer.vue";

export default {
  name: "Home",
  components: {
    WelcomeText,
    Pros,
    About,
    myFooter,
  },
};
</script>

<style scoped>
#parallax {
  min-height: 100vh;
  min-width: 100vw;
  padding: 0px;
  margin: 0px;
  position: absolute;
  background-image: url("../assets/images/home.jpg");
  background-attachment: fixed;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<template>
  <div id="homepage">
    <div id="parallax">
      <welcome-text />
      <pros />
      <about />
    </div>
  </div>
</template>

<script>
import WelcomeText from "../components/welcome-text.vue";
import Pros from "../components/pros.vue";
import About from "../components/about.vue";

export default {
  name: "Home",
  components: {
    WelcomeText,
    Pros,
    About,
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
  background-image: url("../assets/home-pic.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

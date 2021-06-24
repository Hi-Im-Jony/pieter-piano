<template>
  <div id="homepage">
    <div id="parallax">
      <welcome-text />
      <pros />
    </div>
  </div>
</template>
<script>
$(window).scroll(function() {
  $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
});
</script>

<script>
import WelcomeText from "../components/welcome-text.vue";
import Pros from "../components/pros.vue";
// fade function

export default {
  name: "Home",

  components: {
    WelcomeText,
    Pros,
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

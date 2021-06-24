<template>
  <div id="homepage">
    <div id="parallax">
      <welcome-text />
      <pros />
      <about />
      <div id="btn-container">
        <v-btn id="custom-btn">
          Testimonials
        </v-btn>
      </div>
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
  background-image: url("../assets/home-pic.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#btn-container {
  position: absolute;
  bottom: 15vh;
  width: 100vw;
  display: flex;
  justify-content: center;
}
#custom-btn {
  border: solid rgb(245, 245, 237) !important;
  color: rgb(245, 245, 237) !important;
  background: transparent;
  font-size: 20px !important;
}
</style>

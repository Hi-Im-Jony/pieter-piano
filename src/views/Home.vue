<template>
  <div>
    <parallax-pic />
    <pros />
  </div>
</template>

<script>
import ParallaxPic from "../components/ParallaxPic.vue";
import Pros from "../components/pros.vue";

export default {
  name: "Home",

  components: {
    ParallaxPic,
    Pros,
  },
};
</script>

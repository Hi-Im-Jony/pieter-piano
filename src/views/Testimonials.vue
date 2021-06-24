<template>
  <div id="testimonials-page">
    <h1 id="page-title">Testimonials</h1>
    <testimonial :test="tests[0]" />
    <testimonial :test="tests[1]" />
  </div>
</template>

<script>
import Testimonial from "../components/testimonial.vue";
import testimonials from "../testimonials/testimonials.js";
export default {
  name: "Testimonials",
  components: { Testimonial },
  data() {
    return {
      tests: testimonials,
    };
  },
};
</script>

<style scoped>
#testimonials-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#page-title {
  margin: 20px;
}
</style>

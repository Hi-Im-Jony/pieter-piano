<template>
  <div id="testimonials-page">
    <h1 id="page-title">Testimonials and Reviews</h1>
    <p id="page-descriptor">
      I dedicate myself to always give my students the best learning experience
      they can have.
      <br />
      And I am delighted to display below some of the endorsements,
      testimonials, and reviews that reflect this, all from past and present
      pupils.
    </p>
    <testimonial :test="tests[0]" />
    <testimonial :test="tests[1]" />
    <my-footer />
  </div>
</template>

<script>
import MyFooter from "../components/my-footer.vue";
import Testimonial from "../components/testimonial.vue";
import testimonials from "../testimonials/testimonials.js";
export default {
  name: "Testimonials",
  components: { Testimonial, MyFooter },
  data() {
    return {
      tests: testimonials,
    };
  },
  metaInfo: {
    title: "Testimonials",
    meta: [
      {
        name: "description",
        content:
          "I dedicate myself to always give my students the best learning experience they can have. And I am delighted to display below some of the endorsements, testimonials, and reviews that reflect this, all from past and present pupils.",
      },
    ],
  },
};
</script>

<style scoped>
#testimonials-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  min-height: 100vh;
  padding-bottom: 50px;
}
#page-title {
  margin: 40px;
  text-align: center;
}
#page-descriptor {
  text-align: center;
  width: 40vw;
}
</style>

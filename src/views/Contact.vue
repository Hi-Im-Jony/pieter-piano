<template>
  <div id="contact-page">
    <h1>Contact Me Today</h1>
    <my-footer />
  </div>
</template>

<script>
import MyFooter from "../components/my-footer.vue";
export default {
  name: "contact",
  components: { MyFooter },
};
</script>

<style scoped>
#contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

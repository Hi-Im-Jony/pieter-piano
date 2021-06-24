<template>
  <div id="services-container">
    <h1>Services</h1>
    <service
      title="Piano Lessons"
      text="Learn the basics of piano playing, then master them. Students of all ages and levels are welcome."
    />
    <service
      title="Theory Lessons"
      text=" From learning to read basic rhythms, to identifying cadences, there is always more theory to learn."
    />

    <service
      title="Online Lessons"
      text="Can’t join me in person? That’s okay! I offer online lessons too!"
    />
  </div>
</template>

<script>
import Service from "./service.vue";
export default {
  name: "Services",
  components: { Service },
};
</script>

<style scoped>
#services-container {
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
</style>

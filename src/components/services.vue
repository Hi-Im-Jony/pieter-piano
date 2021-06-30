<template>
  <div id="container">
    <div id="services-container">
      <h1>Services</h1>
      <small>&euro;24.99 per Standard Session</small>
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
    <div id="custom-spacer"></div>
    <booking-form />
  </div>
</template>

<script>
import BookingForm from "./bookingForm.vue";
import Service from "./service.vue";
export default {
  name: "Services",
  components: { Service, BookingForm },
};
</script>

<style scoped>
#container {
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background: gray;
  padding: 40px;
}
#services-container {
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
}
#custom-spacer {
  width: 60px;
  height: 60px;
}
</style>

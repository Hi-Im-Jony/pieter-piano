<template>
  <div class="parallax">
    <div id="parallax-text">
      <h1>Professional Piano Lessons</h1>
      <h2 style="margin: 15px 5px 15px 5px">
        Professional piano lessons, delivered by an experienced teacher, with an
        unbeatable distinction rate!
      </h2>
      <v-btn class="custom-btn">Book Lesson</v-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.parallax {
  /* The image used */
  background-image: url("../assets/home-pic.jpg");
  /* Set a specific height */
  min-height: 90vh;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#parallax-text {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  text-shadow: 2px 2px 2px black;
  text-align: center;
  font-size: 20px;
}

.custom-btn {
  color: white !important;
  background-color: transparent !important;
  border: solid white;
  border-width: 1px;
  margin: 50px 0 0 0;
}
</style>

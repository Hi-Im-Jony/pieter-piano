<template>
  <div class="text-container">
    <div id="welcome-text">
      <h1>Professional Piano Lessons</h1>
      <h2 style="margin: 15px 5px 15px 5px">
        Professional piano lessons, delivered by an experienced teacher, with an
        unbeatable distinction rate!
      </h2>
      <v-btn to="/lessons" class="custom-btn">Book Lesson</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40vh 0 40vh 0;
  background: transparent;
}

#welcome-text {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  text-shadow: 2px 2px 2px black;
  text-align: center;
}

.custom-btn {
  color: white !important;
  text-shadow: 2px 2px 2px black;
  box-shadow: 1px 1px 5px 1px black;
  background-color: transparent !important;
  border: solid white;
  border-width: 2px;
  margin: 50px 0 0 0;

  font-size: 20px !important;
}
</style>

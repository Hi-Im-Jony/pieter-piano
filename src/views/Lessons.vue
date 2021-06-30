<template>
  <div id="lessons-page">
    <div data-aos="fade-in" class="lessons">
      <h1 id="page-title">
        Book Your Lesson Today
      </h1>
      <img id="lesson-pic" src="../assets/images/lesson-pic.png" alt="" />
      <services />

      <my-footer />
    </div>
  </div>
</template>

<script>
import MyFooter from "../components/my-footer.vue";
import Services from "../components/services.vue";
export default {
  name: "About",

  components: {
    Services,
    MyFooter,
  },
};
</script>

<style scoped>
#lessons-page {
  background: white;
}
#page-title {
  padding: 10px;
  margin: 0 0 15px 0;
  border-bottom: solid black;
  width: 30%;
  text-align: center;
}
.lessons {
  min-height: 100vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 50px;
}
#lesson-pic {
  box-shadow: 0px 0px 5px 1px black;
  border-width: 1px;
  margin: 30px;
}
@media (max-width: 770px) {
  #page-title {
    width: 90%;
  }
  #lesson-pic {
    width: 90%;
    margin: 0 0 30px 0;
  }
  .lessons {
    padding: 0 0 20px 0;
  }
}
</style>

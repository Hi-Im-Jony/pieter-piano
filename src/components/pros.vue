<template>
  <div id="pros-container">
    <pro
      title="Experienced Teacher"
      text="Nothing can beat experience, and I have plenty of it.

      After over thiry years of teaching music, you can rely on me to give you a truly fulfilling learning experience."
      imageName="experience-pic.jpg"
    />
    <pro
      title="Indisputable Success Rate"
      text="I love the privilege and the challenge that it is to bring out the best in my students.
              
            That is why over the years, I average a rate of eighty-percent Distinctions, from my students taking RIAM and TCM examinations"
      imageName="success-pic.jpg"
    />
    <pro
      title="Master Piano Lessons"
      text="So what are you waiting for?
    
            Let me bring the best out of you, and learn the wonderful art of piano playing, from the comfort of your own home, or at mine."
      imageName="hands-on-piano.png"
    />
  </div>
</template>

<script>
import Pro from "./pro.vue";
export default {
  components: {
    Pro,
  },
};
</script>

<style scoped>
#pros-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0 40px 0;
  width: 100vw;
  background-color: rgb(29, 27, 27);
}
</style>

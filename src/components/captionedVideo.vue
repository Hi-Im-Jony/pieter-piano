<template>
  <div data-aos="fade-up" class="container">
    <div v-if="orientation == 'left'" class="caption-container">
      <i class="piece-title">"{{ piece }}"</i>
      <p class="description">Perfromed by {{ performer }}</p>
    </div>
    <div class="video-container">
      <video
        width="500"
        height="250"
        controls
        :src="require('../assets/videos/' + src + '')"
      ></video>
    </div>
    <div v-if="orientation == 'right'" class="caption-container">
      <i class="piece-title">"{{ piece }}"</i>
      <p class="description">Perfromed by {{ performer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaptionedVideo",
  props: ["piece", "performer", "orientation", "src"],
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin: 20px;
  width: 50%;
  background: rgb(161, 160, 160);
  box-shadow: 0px 0px 10px 0px black;
  color: white;
}
.caption-container {
  text-align: center;
  width: 500px;
}
</style>

<template>
  <div data-aos="fade-up" class="container">
    <div
      v-if="orientation == 'left' || windowWidth <= 549"
      class="caption-container"
    >
      <i class="piece-title">"{{ piece }}"</i>
      <p class="description">Perfromed by {{ performer }}</p>
    </div>
    <div class="video-container">
      <video controls :src="require('../assets/videos/' + src + '')"></video>
    </div>
    <div
      v-if="orientation == 'right' && windowWidth > 549"
      class="caption-container"
    >
      <i class="piece-title">"{{ piece }}"</i>
      <p class="description">Perfromed by {{ performer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaptionedVideo",
  props: ["piece", "performer", "orientation", "src"],
  data: () => ({
    windowWidth: window.innerWidth,
  }),
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
  width: 45%;
  margin: 0 10px 0 10px;
}
video {
  width: 20vw;
  min-width: 200px;
}
@media (max-width: 770px) {
  .container {
    width: 90%;
    max-width: 600px;
  }
  .video-container {
    width: 50%;
  }
  video {
    width: 100%;
    min-width: 0;
  }
}

@media (max-width: 550px) {
  .container {
    flex-direction: column;
    padding: 15px 5px 15px 5px;
  }
  .video-container {
    width: 100%;
  }
  video {
    width: 100%;
  }
}
</style>

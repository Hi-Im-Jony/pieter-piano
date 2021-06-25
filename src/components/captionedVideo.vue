<template>
  <div class="container">
    <div class="caption-container">
      <i class="piece-title">"Piece Title"</i>
      <p class="description">Perfromed by {{ performer }}</p>
    </div>
    <div class="video-container"></div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "CaptionedVideo",
  props: ["piece", "performer", "orientation"],
});
</script>

<style scoped>
.container {
  display: flex;
  border: solid white;
  padding: 40px;
  margin: 20px;
}
</style>

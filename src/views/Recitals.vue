<template>
  <div id="recitals-page">
    <h1 id="page-title">Recitals</h1>
    <p id="page-descriptor">
      Every year, I invite my students to take part in our annual recital. It
      not only gives them an opportunity to show off what they have learnt, but
      I also believe that performing is also a skill that needs to be developed.
      Below are a few pieces previously played at the recitals.
    </p>
    <captioned-video
      piece="Chord Capers"
      performer="Declan, age 8"
      orientation="left"
      src="Chord-capers.mp4"
    />
    <captioned-video
      piece="Etude"
      performer="Liam Chen, age 6"
      orientation="right"
      src="Etude.mp4"
    />
    <captioned-video
      piece="God Bless Ye Merry Gentlemen"
      performer="Declan, age 8, and I"
      orientation="left"
      src="God-Bless.mp4"
    />
    <captioned-video
      piece="Gotcha"
      performer="Di Jun Ye, age 11"
      orientation="right"
      src="Gotcha.mp4"
    />
    <captioned-video
      piece="Litle Flower"
      performer="Lorcan, age 12"
      orientation="left"
      src="Little-Flower.mp4"
    />
    <captioned-video
      piece="Little-Study"
      performer="Bethany, age 4"
      orientation="right"
      src="Little-Study.mp4"
    />
    <captioned-video
      piece="Marshmallow Bounce"
      performer="Liam Chen, age 6"
      orientation="left"
      src="Marshmallow-Bounce.mp4"
    />
    <captioned-video
      piece="Nocturne"
      performer="Natasha, age 13"
      orientation="right"
      src="Nocturne.mp4"
    />
    <captioned-video
      piece="O Come All Ye' Faithfull"
      performer="Bethany and I"
      orientation="left"
      src="O-Come.mp4"
    />
    <captioned-video
      piece="We Wish You A Merry Christmas"
      performer="Natasha, age 13"
      orientation="left"
      src="We-Wish-You-A-Merry-Christmas.mp4"
    />
    <div id="spacer-20px"></div>
    <my-footer />
  </div>
</template>

<script>
import CaptionedVideo from "../components/captionedVideo.vue";
import MyFooter from "../components/my-footer.vue";
export default {
  name: "Recitals",
  components: {
    CaptionedVideo,
    MyFooter,
  },
};
</script>

<style scoped>
#recitals-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(
    180deg,
    black,
    rgb(51, 49, 49),
    rgb(51, 49, 49),
    black
  );
}
#page-title {
  padding: 10px;
  margin: 0 0 15px 0;
  border-bottom: solid white;
  width: 20%;
  text-align: center;
}
#page-descriptor {
  width: 40%;
  text-align: center;
}
#spacer-20px {
  height: 20px;
}
</style>

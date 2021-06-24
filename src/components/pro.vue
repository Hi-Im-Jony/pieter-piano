<template>
  <div data-aos="fade-up" id="pro">
    <h2>{{ title }}</h2>
    <img
      class="pic"
      :src="require('@/assets/' + imageName + '')"
      alt="image not found"
    />
    <p class="pro-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "text", "imageName"],
};
</script>

<style scoped>
#pro {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  border-width: 1px;
  margin: 50px;
  width: 500px;
  height: 500px;
  text-align: center;
  position: relative;
  bottom: 25vh;
  border-radius: 25px;
  box-shadow: 0px 0px 10px 0px black;
}
.pic {
  width: 300px;
  border-radius: 10px;
  margin: 20px 0 20px 0;
}
.pro-text {
  white-space: break-spaces;
}
</style>

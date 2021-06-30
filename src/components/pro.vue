<template>
  <div data-aos="fade-up" id="pro">
    <h2>{{ title }}</h2>
    <img
      class="pic"
      :src="require('@/assets/images/' + imageName + '')"
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
  margin: 50px;
  padding: 20px;
  width: 500px;
  height: 500px;
  text-align: center;
  position: relative;
  bottom: 15vh;
  border-radius: 25px;
  box-shadow: 1px 2px 5px 0px black;
  color: black;
}
.pic {
  width: 300px;
  border-radius: 10px;
  margin: 20px 0 20px 0;
}
.pro-text {
  white-space: break-spaces;
}

@media only screen and (max-width: 600px) {
  #pro {
    width: 250px;
    height: auto;
    bottom: 0;
    margin: 25px 0 25px 0;
  }

  .pic {
    width: 90%;
  }
}
</style>

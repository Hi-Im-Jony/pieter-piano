<template>
  <div class="product">
    <h1 class="prod-title">{{ title }}</h1>
    <small>{{ duration }}</small>
    <img
      class="prod-img"
      :src="require('@/assets/images/' + image + '')"
      alt=""
    />
    <p class="prod-description">{{ description }}</p>
    <v-spacer />
    <v-btn dark class="pay-btn" :href="link">{{ price }}</v-btn>
  </div>
</template>

<script>
export default {
  name: "product",
  props: ["title", "duration", "image", "description", "price", "link"],
};
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  width: 400px;
  background-color: rgb(7, 7, 7);
  box-shadow: 0px 0px 5px 0px rgb(0, 0, 0);
  text-align: center;
  padding: 20px;
  margin: 20px;
}
.prod-title {
  height: 25%;
}
.prod-img {
  height: 25%;
  margin: 20px;
}

.prod-description {
  margin: 10px;
}

.pay-btn {
  padding: 10px;
}
</style>

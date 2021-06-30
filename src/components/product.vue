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
  max-width: 400px;
  background-color: rgba(15, 15, 15, 0.815);
  box-shadow: 1px 1px 10px 0px rgb(0, 0, 0);
  color: white;
  text-align: center;
  padding: 20px;
  margin: 20px;
}
.prod-title {
  height: 25%;
}
.prod-img {
  height: 110px;
  margin: 20px;
}

.prod-description {
  margin: 10px;
}

.pay-btn {
  padding: 10px;
}

@media (max-width: 770px) {
  .product {
    min-height: 450px;
    height: auto;
  }
}
</style>

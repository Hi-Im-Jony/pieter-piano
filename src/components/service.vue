<template>
  <div class="service">
    <h3>{{ title }}</h3>
    <div class="line"></div>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: ["title", "text"],
};
</script>

<style scoped>
.service {
  text-align: center;
  width: 100%;
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.line {
  height: 1px;
  width: 55%;
  border-top: solid white;
  border-width: 1px;
  margin: 0 0 20px 0;
}
</style>

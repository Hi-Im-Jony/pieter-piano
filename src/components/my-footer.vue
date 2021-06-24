<template>
  <footer>
    <small>&#169; All Rights Reserved</small>

    <small>
      Designed by
      <a href="https://corneljonathan.website" target="_blank">
        Cornel Jonathan Web Design
      </a>
    </small>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
footer {
  color: white;
  background-color: rgb(36, 33, 33);
  text-align: center;
  position: absolute;
  width: 100vw;
  padding: 10px;
  bottom: 0;
}
small {
  margin: 0 20px 0 10px;
}
</style>

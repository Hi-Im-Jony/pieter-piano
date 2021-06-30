<template>
  <footer>
    <small>&#169; All Rights Reserved</small>
    <br />
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
  background-color: black;
  text-align: center;
  position: absolute;
  width: 100%;
  padding: 0 5px 0 5px;
  bottom: 0;
}
small {
  margin: 0 20px 0 10px;
}
</style>

<template>
  <div id="payment-page">
    <h1 id="page-title">Make A Payment</h1>
    <p id="page-descriptor">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
      nobis veniam quos quam porro molestias.
    </p>
  </div>
</template>

<script>
export default {
  name: "payments",
  components: {},
};
</script>

<style scoped>
#payment-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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
</style>

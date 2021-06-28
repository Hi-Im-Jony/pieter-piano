<template>
  <div id="payment-page">
    <h1 id="page-title">Make A Payment</h1>
    <p id="page-descriptor">
      Easy and hassle free online payments are here!
      <br />
      <br />
      Select the service you wish to pay for, fill in your details, and then
      proceed with the payment. Once you do so, you recieve an email comfirming
      you payment.
    </p>
    <div id="product-container">
      <product
        title="30-min session"
        image="experience-pic.jpg"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
      nobis veniam quos quam porro molestias.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
      nobis veniam quos quam porro molestias."
        link="#"
      />
      <product
        title="30-min session"
        image="experience-pic.jpg"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
      nobis veniam quos quam porro molestias.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
      nobis veniam quos quam porro molestias."
        link="#"
      />
      <product
        title="30-min session"
        image="experience-pic.jpg"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
      nobis veniam quos quam porro molestias.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
      nobis veniam quos quam porro molestias."
        link="#"
      />
      <product
        title="30-min session"
        image="experience-pic.jpg"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
      nobis veniam quos quam porro molestias.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
      nobis veniam quos quam porro molestias."
        link="#"
      />
    </div>
    <my-footer />
  </div>
</template>

<script>
import MyFooter from "../components/my-footer.vue";
import Product from "../components/product.vue";
export default {
  name: "payments",
  components: { Product, MyFooter },
};
</script>

<style scoped>
#payment-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  background: linear-gradient(
    180deg,
    black,
    rgb(51, 49, 49),
    rgb(51, 49, 49),
    black
  );
  min-height: 100vh;
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
#product-container {
  display: flex;
  align-items: center;
  padding: 40px;
}
</style>

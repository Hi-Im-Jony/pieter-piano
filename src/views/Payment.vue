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
        title="Young Children's Lesson"
        duration="30 minutes"
        image="experience-pic.jpg"
        description="A short thirty-minute lesson is what I find to be the most suitable for young children who are just starting out. 
        This is why I offer shorter lessons for children under 5yrs."
        price="€19.99"
        link="#"
      />
      <product
        title="Standard Lesson"
        duration="45 minutes"
        image="experience-pic.jpg"
        description="A standard, forty-five minute session, suitable for those over 5yrs."
        price="€24.99"
        link="#"
      />
      <product
        title="Full Term"
        duration="10 x Standard Lesson's"
        image="experience-pic.jpg"
        description="Save over 10% when paying for the full term all at once."
        price="€219.99"
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

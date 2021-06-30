<template>
  <div id="contact-page">
    <h1 id="page-title">Contact Me Today</h1>
    <p id="title-subscript">
      Don't hesitate to reach out with the contact information below, or send a
      message using the form.
    </p>

    <div id="container">
      <div class="group">
        <h1 class="group-title">
          Where The Magic Happens
        </h1>
        <p id="address">
          14 Deerhaven View Clonee Dublin 15,
          <br />
          Dublin, Ireland, D15V4K8
        </p>

        <div id="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9514.637386196942!2d-6.424491412010229!3d53.40303337100356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48676d435847a377%3A0x47726fd553df79f5!2sParslickstown%2C%20Dublin%2C%20D15%20V4K8!5e0!3m2!1sen!2sie!4v1624546953460!5m2!1sen!2sie"
            width="400"
            height="500"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div class="group">
        <h1 class="group-title">Send Me a Message</h1>
        <a itemprop="email" href="mailto:louwtjie911@gmail.com">
          louwtjie911@gmail.com
        </a>
        <a id="phone" href="tel:+353857222811">
          +353 85 722 2811
        </a>
        <form name="contact" netlify>
          <h2 id="form-title">
            Fill in your details, and I'll reach out to arrange your lessons!
          </h2>
          <div class="input-container">
            <v-text-field label="Full name" required></v-text-field>

            <v-textarea label="Message"></v-textarea>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
    <my-footer />
  </div>
</template>

<script>
import MyFooter from "../components/my-footer.vue";
export default {
  name: "contact",
  components: { MyFooter },
};
</script>

<style scoped>
#contact-page {
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
}
#contact-pic {
  width: 350px;
  border-radius: 20px;
}
#page-title {
  margin: 40px;
}
#contact-img {
  border-radius: 10%;
}
#container {
  display: flex;
  width: 100vw;
  justify-content: center;
}
.group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 25%;
  margin: 50px 0 50px 0;
}
#map-container {
  margin: 0 0 40px 0;
}
form {
  background: rgb(212, 211, 211);
  color: black;
  width: 400px;
  height: 500px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 40px 0;
}
.input-container {
  width: 70%;
}
button {
  background: rgb(192, 190, 190);
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
}
button:hover {
  background: rgb(173, 169, 169);
}
</style>

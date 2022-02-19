<template>
  <div id="contact-page">
    <h1 id="page-title">Contact Me Today</h1>
    <p id="page-descriptor">
      Don't hesitate to reach out with the contact information below, or send a
      message using the form.
    </p>
    <div class="container">
      <div></div>
    </div>

    <div id="container">
      <div class="group">
        <p id="address">
          14 Deerhaven View Clonee Dublin 15,
          <br />
          Dublin, Ireland, D15V4K8
        </p>

        <div id="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9514.637386196942!2d-6.424491412010229!3d53.40303337100356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48676d435847a377%3A0x47726fd553df79f5!2sParslickstown%2C%20Dublin%2C%20D15%20V4K8!5e0!3m2!1sen!2sie!4v1624546953460!5m2!1sen!2sie"
            style="border:0;"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div class="group">
        <a itemprop="email" href="mailto:louwtjie911@gmail.com">
          louwtjie911@gmail.com
        </a>
        <a id="phone" href="tel:+353857222811">
          +353 85 722 2811
        </a>
        <booking-form formMessage="I'm always happy to hear from you!" />
      </div>
    </div>
    <my-footer />
  </div>
</template>

<script>
import BookingForm from "../components/bookingForm.vue";
import MyFooter from "../components/my-footer.vue";
export default {
  name: "contact",
  components: {
    MyFooter,
    BookingForm,
  },
  metaInfo: {
    title: "Contact",
    meta: [
      {
        name: "description",
        content:
          "Don't hesitate to reach out if you have any questions regarding piano lessons",
      },
    ],
  },
};
</script>

<style scoped>
#contact-page {
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  text-align: center;
}
#contact-pic {
  width: 350px;
  border-radius: 20px;
}
#page-title {
  margin: 40px;
}

#page-descriptor {
  width: 70%;
}
#contact-img {
  border-radius: 10%;
}
#container {
  display: flex;
  width: 70vw;
  justify-content: center;
  margin: 0 0 60px 0;
}
.group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 25%;
  margin: 0 25px 0 25px;
}

iframe {
  width: 400px;
  height: 530px;
}

@media (max-width: 1185px) {
  #container {
    flex-direction: column-reverse;
    width: 100%;
    margin: 0 0 80px 0;
  }
  .group {
    width: 100%;
    margin: 10px 0 10px 0;
  }
  iframe {
    width: 100%;
  }
}
</style>

<template>
  <div>
    <div id="background-img"></div>
    <div data-aos="fade-in" class="lessons">
      <h1 id="page-title">
        Book Your Lesson Today
      </h1>
      <img id="lesson-pic" src="../assets/images/lesson-pic.png" alt="" />

      <services />

      <form
        name="book-lesson"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <input type="hidden" name="form-name" value="book-lesson" />

        <h2 id="form-title">
          Fill in your details, and I'll reach out to arrange your lessons!
        </h2>
        <div class="input-container">
          <v-text-field
            v-model="form.name"
            name="name"
            label="Full name"
            required
          ></v-text-field>

          <v-text-field
            v-model="form.phone"
            name="phone"
            label="Phone"
            required
          ></v-text-field>

          <v-text-field
            v-model="form.email"
            name="email"
            label="E-mail"
            required
          ></v-text-field>

          <v-textarea
            v-model="form.message"
            name="message"
            label="Message"
          ></v-textarea>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
      <my-footer />
    </div>
  </div>
</template>

<script>
import MyFooter from "../components/my-footer.vue";
import Services from "../components/services.vue";
export default {
  name: "About",
  data: () => ({
    form: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  }),
  components: {
    Services,
    MyFooter,
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit() {
      fetch("/", {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-urlencoded",
        },
        body: this.encode({
          "form-name": "book-lesson",
          ...this.form,
        }),
      });
    },
  },
};
</script>

<style scoped>
#background-img {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/images/potential-pic.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  height: 100%;
  width: 100vw;
  position: absolute;
}
.lessons {
  min-height: 100vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 50px;
}
#lesson-pic {
  box-shadow: 0px 0px 5px 1px black;
  border: solid white;
  border-width: 1px;
  margin: 30px;
}
form {
  background: rgb(212, 211, 211);
  color: black;
  width: 55%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 40px 0;
}
.input-container {
  width: 70%;
}
</style>

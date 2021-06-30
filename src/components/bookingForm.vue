<template>
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
</template>

<script>
export default {
  name: "bookingForm",
  data: () => ({
    form: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  }),
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
          "Content-Type": "application/x-www-form-urlencoded",
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
form {
  background: rgb(212, 211, 211);
  color: black;
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.input-container {
  width: 90%;
}
</style>

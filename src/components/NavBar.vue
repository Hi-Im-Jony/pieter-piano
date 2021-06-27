<template>
  <div id="navbar">
    <v-app-bar color="rgb(27,27,27)" dark fixed app flat>
      <a href="/" id="title-sub-container">
        <h1 id="title">Piano Pieter</h1>
        <small id="sub">Professional Piano Lessons</small>
      </a>

      <v-spacer></v-spacer>

      <a class="nav-link" href="/">Home</a>
      <a class="nav-link" href="/lessons">Book Lessons</a>
      <a class="nav-link" href="/contact">Contact</a>

      <div class="custom-spacer" />
      <v-menu class="custom-menu" dark open-on-hover top offset-y>
        <template v-slot:activator="{ on, attrs }">
          <a class="nav-link" v-bind="attrs" v-on="on">
            Media
          </a>
        </template>

        <v-list flat>
          <v-list-item v-for="(item, index) in items" :key="index">
            <a class="nav-link" :href="item.to">{{ item.title }}</a>
          </v-list-item>
        </v-list>
      </v-menu>
      <a class="nav-link" href="/payments">Online Payment</a>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    items: [
      {
        title: "Recitals",
        to: "/recitals",
      },
      // {
      //   title: "Past and Present Pupils",
      //   to: "/pupils",
      // },
      {
        title: "Testimonials",
        to: "/testimonials",
      },
    ],
  }),
  methods: {
    onScroll(e) {
      this.is_transparent = !(e.target.scrollTop > 0);
    },
  },
};
</script>

<style scoped>
.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 10px 0 10px;
}
.nav-link:hover {
  color: rgb(65, 136, 202);
}
.nav-link:active {
  color: rgb(46, 102, 206);
}
#title {
  padding: 0px;
  margin: 10px 0px -10px 0px;
  color: white;
}
#sub {
  padding: 0px 0px 10px 0px;
  margin: 0px;
  color: white;
}
#title-sub-container {
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.custom-spacer {
  width: 75px;
}
.custom-menu {
  background-color: rgb(27, 27, 27) !important;
}
</style>

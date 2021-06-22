<template>
<div id="navbar">
  <v-app-bar fixed app flat >
    <div id="title-sub-container">
        <h1 id="title">Pieter's Piano</h1>
        <small id="sub">Professional Piano Lessons</small>
    </div>

    <v-spacer></v-spacer>

    <a class="nav-link" href="/">Home</a>
    <a class="nav-link" href="/about">Meet Your Teacher</a>
    <v-menu
      open-on-hover
      top
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <a class="nav-link" v-bind="attrs" v-on="on">
          Content
        </a>
      </template>

      <v-list flat>
        <v-list-item
          v-for="(item, index) in items"
          :key="index" 
        >
          <a class="nav-link" :href="item.to">{{item.title}}</a>
        </v-list-item>
      </v-list>
    </v-menu>

    <div class="custom-spacer"/>

    <a class="nav-link" href="/lessons">Lessons</a>
    <a class="nav-link" href="/contact">Contact</a>
    <a class="nav-link" href="/payments">Payments</a>

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
      {
        title: "Past and Present Pupils",
        to: "/pupils",
      },
      {
        title: "Testimonials",
        to: "/testimonials",
      },
    ],
    }),
  methods: {
    onScroll(e) {
      this.is_transparent = !(e.target.scrollTop > 0);
    }
  },
}
</script>

<style scoped>
.nav-link{
    color: black;
    text-decoration: none;
    margin: 0 10px 0 10px;
}
.nav-link:hover{
    color: rgb(65, 136, 202);
}
#title{
    padding: 0px;
    margin: 10px 0px -10px 0px;
}
#sub{
    padding: 0px 0px 10px 0px;
    margin: 0px;
}
#title-sub-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.custom-spacer {
    width: 75px;
}
</style>
<template>
  <div>
    <v-app-bar app>
      <a href="/" id="title-sub-container">
        <h1 id="title">Piano Pieter</h1>
        <small id="sub">Professional Piano Lessons</small>
      </a>
      <v-spacer />
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <div id="nav-links-container">
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">Book Lesson</a>
        <a href="#" class="nav-link">Contact</a>
        <a href="#" class="nav-link">Media</a>
        <a href="#" class="nav-link">Online Payments</a>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "navTwo",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
#title {
  padding: 0px;
  margin: 10px 0px -10px 0px;
  color: black;
}
#sub {
  padding: 0px 0px 10px 0px;
  margin: 0px;
  color: black;
}
#title-sub-container {
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#nav-links-container {
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.nav-link {
  color: black;
  text-decoration: none;
  padding: 30px;
}
.nav-link:hover {
  color: rgb(65, 136, 202);
}
.nav-link:active {
  color: rgb(46, 102, 206);
}
</style>

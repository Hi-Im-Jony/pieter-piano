import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import AOS from "aos";
import "aos/dist/aos.css";
import VueMeta from "vue-meta";

Vue.config.productionTip = false;
Vue.use(VueMeta);

new Vue({
  router,
  store,
  vuetify,
  created() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount("#app");

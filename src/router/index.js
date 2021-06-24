import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/lessons",
    name: "Lessons",

    component: () =>
      import(/* webpackChunkName: "lessons" */ "../views/Lessons.vue"),
  },
  {
    path: "/contact",
    name: "Contact",

    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/payments",
    name: "Payments",

    component: () =>
      import(/* webpackChunkName: "payments" */ "../views/Payment.vue"),
  },
  {
    path: "/recitals",
    name: "Recitals",

    component: () =>
      import(/* webpackChunkName: "recitals" */ "../views/Recitals.vue"),
  },
  {
    path: "/pupils",
    name: "Pupils",

    component: () =>
      import(/* webpackChunkName: "pupils" */ "../views/Pupils.vue"),
  },
  {
    path: "/testimonials",
    name: "Testimonials",

    component: () =>
      import(
        /* webpackChunkName: "testimonials" */ "../views/Testimonials.vue"
      ),
  },
  {
    path: "*",
    name: "404",

    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

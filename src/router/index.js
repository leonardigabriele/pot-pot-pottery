import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Product from "../views/Product.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/products",
    name: "products",
    component: Main,
  },
  {
    path: "/products/:uid",
    name: "product",
    components: {
      default: Main,
      product: Product,
    },
    props: {
      product: true,
    },
  },
  // {
  //   path: "*",
  //   name: "catch",
  //   redirect: { name: "home" },
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     return { x: 0, y: 0 };
  //   }
  // },
});

export default router;

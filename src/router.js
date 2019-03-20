import Vue from "vue";
import Router from "vue-router";
import Index from "./pages/index/index.vue";
import view01 from "./pages/view01/view01.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/index.html",
      name: "Index",
      component: Index
    },
    {
      path: "/view01.html",
      name: "view01",
      component: view01
    },
   /* {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/!* webpackChunkName: "about" *!/ "./views/About.vue")
    }*/
  ]
});

import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Index from "./views/Index.vue";
import ComingSoon from "./views/ComingSoon.vue";
import Advance from "./views/Advance.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: "active",
  routes: [{
      path: "/",
      name: "index",
      components: {
        // header: AppHeader,
        default: ComingSoon,
        // footer: AppFooter
      },
    },
    {
      path: "/advance",
      name: "advance",
      components: {
        // header: AppHeader,
        default: Advance,
        // footer: AppFooter
      },
    },

  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    } else {
      return {
        x: 0,
        y: 0,
      };
    }
  },
});
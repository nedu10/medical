import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import AccountWrapper from "../components/wrappers/AccountWrapper.vue";

import Feeds from "../views/auth/Feeds.vue";
import Members from "../views/auth/Members.vue";
import Broadcast from "../views/auth/Broadcast.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/account",
    name: "Account",
    component: AccountWrapper,
    children: [
      {
        path: "",
        component: Feeds,
        name: "Feeds",
        meta: {
          title: "Variety - Feeds",
        },
      },
      {
        path: "members",
        component: Members,
        name: "Members",
        meta: {
          title: "Variety - Members",
        },
      },
      {
        path: "broadcast",
        component: Broadcast,
        name: "Broadcast",
        meta: {
          title: "Variety - Broadcast",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

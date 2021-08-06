import store from "@/store";
import {
  createRouter,
  createWebHashHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登陆",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../modules/Login/index.vue"),
  },
  {
    path: "/",
    name: "Home",
    meta: {
      title: "个人中心",
      requiresAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../modules/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "个人中心",
      requiresAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../modules/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next) => {
    document.title = (to.meta.title as string) ?? "template";
    if (to.meta.requiresAuth) {
      if (!localStorage.getItem("token")) {
        next({
          path: "/login",
          query: { redirect: to.fullPath },
        });
        return;
      }
      next();
    } else {
      next();
    }
  }
);

export default router;

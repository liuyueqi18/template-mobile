import {
  createRouter,
  createWebHashHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "个人中心",
      requiresAuth: false,
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
    const needAuth = to.matched.find((record) => record.meta.requiresAuth);
    const needToSetTitle = to.matched.find((record) => record.meta.title);
    document.title = (needToSetTitle?.meta.title as string) ?? "template";
    if (needAuth) {
      if (to.name === "Login") {
        next();
        return;
      }
      if (localStorage.getItem("token")) {
        next();
      } else {
        next({ name: "Login" });
      }
    } else {
      next();
    }
  }
);

export default router;

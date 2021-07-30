import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";

// window.addEventListener(
//   "error",
//   (e) => {
//     console.log(e);
//     //TODO:上报逻辑
//     return true;
//   },
//   true
// );
// // 处理未捕获的异常，主要是promise内部异常，统一抛给 onerror
// window.addEventListener("unhandledrejection", (e) => {
//   throw e.reason;
// });
// // 框架异常统一捕获
// App.config.errorHandler = function (err: any, vm: any, info: any) {
//   //TODO:上报逻辑
//   console.log(err, vm, info);
// };

createApp(App).use(store).use(router).use(Vant).mount("#app");

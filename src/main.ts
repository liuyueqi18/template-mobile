import "vant/lib/index.css"; // index.css 要先在Vant之前引入
import "./theme/vant.css";
import { ComponentPublicInstance, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";

const app = createApp(App);

// 监听报错
window.addEventListener(
  "error",
  (e) => {
    // TODO
    console.log(e);
    return true;
  },
  true
);
// 处理未捕获的异常，主要是promise内部异常.统一抛给 onerror
window.addEventListener("unhandledrejection", (e) => {
  // TODO
  console.log(e);
  throw e.reason;
});
// 框架异常统一捕获
app.config.errorHandler = function (
  err: unknown,
  vm: ComponentPublicInstance | null,
  info: string
) {
  // TODO
  console.log(err, vm, info);
};

app.use(store).use(router).use(Vant).mount("#app");

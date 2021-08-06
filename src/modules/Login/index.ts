import { fetchLogin } from "@/services/base";
import store from "@/store";
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const handlerClick = () => {
      const redirectQuery = route.query.redirect;

      //#region
      let redirect: string | null;
      if (redirectQuery instanceof Array) {
        redirect = redirectQuery[0];
      } else {
        redirect = redirectQuery;
      }
      //#endregion

      fetchLogin().then((res) => {
        const userInfo = Object.assign(res);
        // 状态
        store.commit("base/login", userInfo);
        // localStorage
        localStorage.setItem("timestamp", `${new Date().getTime()}`);
        localStorage.setItem("token", `mock${new Date().getTime()}`);
        // 重定向
        if (redirect) {
          router.replace(redirect);
        } else {
          router.replace({ path: "/" });
        }
      });
    };
    return {
      handlerClick,
    };
  },
});

<template>
  <!-- <van-config-provider :theme-vars="themeVars"> -->
  <router-view />
  <!-- </van-config-provider> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // 除此之外 还可以通过 theme => vant.css 修改 root
    const themeVars = {
      // calendarSelectedDayBackgroundColor: "#1989fa",
    };

    return {
      themeVars,
    };
  },
});
</script>

<style></style>

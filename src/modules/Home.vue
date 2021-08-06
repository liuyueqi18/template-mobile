<template>
  <div class="home">
    <van-tabs v-model:active="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
    <div class="demo-box">
      <div class="demo1">
        <div class="title">1</div>
      </div>
      <div class="demo2">
        <div class="title">1</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
.home {
  min-height: 100vh;
  font-size: 16px;
  background: #f4f4f4;
  .demo-box {
    display: grid;
    justify-content: center;
    .demo1 {
      width: 100px;
      height: 100px;
      background: skyblue;
      .title {
        color: red;
      }
    }
    .demo2 {
      width: 100px;
      height: 100px;
      background: red;
      .title {
        color: greenyellow;
      }
    }
  }
}
</style>

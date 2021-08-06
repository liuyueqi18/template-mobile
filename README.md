&nbsp;
## `移动端通用模版`

&nbsp;

1. 移动端适配问题 [postcss-px-to-viewport](https://github.com/ai/postcss) 帮助我们解决了这个问题.

2. 环境变量 我们为你预设了`dev` `stage` `prod`, 如有其他需求可自行添加. 记得在 `package.json` 中添加 `mode`.

3. 关于错误处理上报 我们在 `main.ts` 中添加了一些方法 有 `window` 提供的 也有 `vue` 框架为我们提供的. 综合使用, 效果更佳.

4. 关于组件库 我们采用 [vant](https://github.com/ai/postcss). 


### 组件库样式修改

&nbsp;

1. 修改变量 
  - 通过 `ConfigProvider` 覆盖. 
  > ConfigProvider 仅影响它的子组件的样式, 不影响全局 root 节点.

  `template`
  ```vue
  <van-config-provider :theme-vars="themeVars">
    <router-view />
  </van-config-provider>
  ```
  &nbsp;
  `js`
  ```js
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      const themeVars = {
        calendarSelectedDayBackgroundColor: "#1989fa",
      };
      return {
        themeVars,
      };
    },
  });
  ```
  - 通过 `root` 修改. 强烈推荐.

  &nbsp;
  `theme -> vant.css` 内含所有的组件的组件变量. 只需要更改组件对应样式即可. [css:root](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)

  > 以 `Button` 组件为例 修改 `--van-button-primary-background-color` 就可以改变 `Button` 组件 `primary` 状态下的颜色
  ```css
  .root {
    --van-button-primary-background-color: skyblue;
  }
  ```

  > Vant 中的 CSS 变量分为 `基础变量` 和 `组件变量`. 组件变量会继承基础变量, 因此在修改基础变量后, `会影响所有相关的组件`.

  > `修改变量`
  >> 由于 CSS 变量继承机制的原因, 两者的`修改方式`有一定差异: 

  | 变量/支持方式 | 基础变量 | 组件变量 |
  | :-----: | :----: | :----: |
  | root 选择器 | 是 | 是 |
  | ConfigProvider | 否 | 是 |

&nbsp;

2. `vue.config.js` 不推荐 因为` vant3` 提供了更佳简单的处理方式.
```js
 rules: [
    {
      test: /\.less$/,
      use: [
        // ...其他 loader 配置
        {
          loader: "less-loader",
          options: {
            // 若 less-loader 版本小于 6.0, 请移除 lessOptions 这一级, 直接配置选项.
            lessOptions: {
              modifyVars: {
                // 直接覆盖变量
                "text-color": "#111",
                "border-color": "#eee",
                // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                hack: `true; @import "your-less-file-path.less";`,
              },
            },
          },
        },
      ],
    },
  ],
```
   
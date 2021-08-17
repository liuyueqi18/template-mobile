// eslint-disable-next-line
const WebpackBar = require("webpackbar");

module.exports = {
  productionSourceMap: true, // 生产环境是否要生成 sourceMap
  chainWebpack: (config) => {
    config.resolve.symlinks(false);
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .tap((option) => {
        return {
          ...option,
          fix: true,
        };
      });
  },

  devServer: {
    // port: 8080,
    // host: '0.0.0.0',
    // https: false,
    // open: true
    disableHostCheck: true, //webpack4.0 开启热更新
  },

  configureWebpack: {
    externals: {
      //
    },
    plugins: [
      new WebpackBar({
        name: `移动模版`,
        color: "#58C9B9",
      }),
    ],
  },
};

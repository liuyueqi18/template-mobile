module.exports = {
  
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
    disableHostCheck: true, //webpack4.0 开启热更新
  },

  configureWebpack: {
    externals: {
      //
    },
  },
};

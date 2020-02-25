const isProduction = process.env.NODE_ENV === "production";
module.exports = {
  chainWebpack: config => {
    config.module.rules.delete("eslint");
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/common.scss";`
      }
    }
  },
  productionSourceMap: !isProduction
};

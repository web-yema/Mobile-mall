const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');
const mockData = require('./mockData');

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: ['./src/theme'],
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 750,
            unitPrecision: 2,
          }),
        ],
      },
    },
  },
  productionSourceMap: false, // 不产生sourcemap文件
  configureWebpack: (config) => {
    config.plugins.push(
      new SkeletonWebpackPlugin({
        webpackConfig: {
          entry: {
            app: path.join(__dirname, './src/Skeleton.js'), // 骨架屏入口
          },
        },
        minimize: true,
        quiet: true,
      }),
    );
  },
  lintOnSave: false, // 是否开启eslint验证
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true,
    },
  },
  devServer: {
    before(app) {
      // app express提供的
      mockData(app);
    },
  },
};

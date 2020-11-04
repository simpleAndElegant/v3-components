const path = require('path');

const resolve = (filePath) => path.join(__dirname, './', filePath);


module.exports = {
  outputDir: 'docs',
  publicPath: '/v3-components/',
  pages: {
    index: {
      entry: resolve('story/main.ts'),
      template: 'public/index.html',
      filename: 'index.html',
      title: '组件示例',
    },
  },
  chainWebpack: config => {
    config.plugins
      .delete('prefetch-index')
      .delete('preload-index');
    config.resolve.alias
      .set('story', resolve('story'))
      .set('src', resolve('src'))
  },
  css: {
      loaderOptions: {
          sass: {
              prependData: `@import "src/style/global-import.scss";`
          },
      }
  },
}
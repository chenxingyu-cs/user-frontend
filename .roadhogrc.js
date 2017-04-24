// npm i antd-mobile -S
const path = require('path');
const pxtorem = require('postcss-pxtorem');
const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
];

export default {
  entry: 'src/index.js',
  extraBabelPlugins: [
    'transform-runtime',
    ['import', { libraryName: 'antd-mobile', style: 'css' }],
  ],
  env: {
    development: {
      extraBabelPlugins: [
        'dva-hmr',
        'transform-runtime',
      ],
    },
    production: {
      extraBabelPlugins: [
        'transform-runtime',
      ],
    },
  },
  svgSpriteLoaderDirs: svgSpriteDirs,
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    }),
  ],
  //...
}

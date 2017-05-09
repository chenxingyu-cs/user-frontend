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
  theme: {
    "@primary-color": "#1DA57A",
    "@link-color": "#1DA57A",
    "@border-radius-base": "2px",
    "@font-size-base": "16px",
    "@line-height-base": "1.2"
  },
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
  "proxy": {
    "/api": {
      "target": "http://192.168.3.49:8000/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
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

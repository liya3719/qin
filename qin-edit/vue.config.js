/*
 * @description: 
 * @version: 
 * @Author: liya
 * @Date: 2020-03-01 20:44:54
 * @LastEditors: liya
 * @LastEditTime: 2020-08-28 15:28:11
 */
/**
 * vue.config基本配置
 */
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
let testAddress, targetAddress;
try {
  testAddress = JSON.parse(process.env.npm_config_argv).original.slice(2).toString();    
} catch (error) {
  testAddress = process.argv.slice(2).toString();
};
let reg = /^test?(\d+)$/g;
if(reg.test(testAddress)) {
   targetAddress = testAddress ? `testAddress` : `本地mock服务地址`;
} else {
  targetAddress = testAddress ? `testAddress` : `本地mock服务地址`;
};
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  outputDir: process.env.outputDir,
  publicPath:  process.env.publicPath,
  productionSourceMap: false,
  parallel: isProduction ? true : false,
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@interface', resolve('src/interface'))
      .set('@model', resolve('src/model'))
      .set('@service', resolve('src/services'))
      .set('@api', resolve('src/api'))
    config.module
      .rule('fonts')
      .use('url-loader')
      .tap(options => {
        return options;
      });
  },
  pages: {
    index: {
      entry: './src/main.ts'
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: !isProduction ? 'http://localhost:3000' : '',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: config => {
    if(process.env.NODE_ENV === 'production') {
      
    }
  }
}

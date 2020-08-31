/*
 * @description: main.ts
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-03-01 20:44:54
 * @LastEditors: liya
 * @LastEditTime: 2020-08-26 15:13:54
 */
import 'reflect-metadata';
import Vue from 'vue';
import './common/reset.less';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

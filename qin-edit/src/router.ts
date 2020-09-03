/*
 * @description: router
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-03-01 20:44:54
 * @LastEditors: liya
 * @LastEditTime: 2020-09-03 17:24:13
 */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/publish/history',
      name: 'history',
      component: () => import(/* webpackChunkName: "history" */ './views/history/app.vue'),
      meta: {
        name: '发布历史',
      },
    },
    {
      path: '/template/list',
      name: 'template',
      component: () => import(/* webpackChunkName: "template" */ './views/template/app.vue'),
      meta: {
        name: '模板列表',
      },
    },
    {
      path: '/page/edit/:templateId?',
      name: 'pageEdit',
      component: () => import(/* webpackChunkName: "pageEdit" */ './views/build/app.vue'),
      meta: {
        name: '页面搭建',
      },
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});

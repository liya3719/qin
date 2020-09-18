/*
 * @description: apis字典
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-03-01 20:44:54
 * @LastEditors: liya
 * @LastEditTime: 2020-09-08 19:48:51
 */
/**
 * main主体接口
 */
export default {
  registry: '/api/qin/user/registry',  // 注册
  login: '/api/qin/user/login',  // 登录
  main: '/api/qin/main', // 获取信息
  templateList: '/api/qin/template/list',  // 模板列表
  templateCollect: '/api/qin/template/collect',  // 收藏模板
  templateBuild: '/api/qin/template/build',  // 模板生成页面
  historyList: '/api/qin/history/list',  // 发布历史列表
  historyRollBack: '/api/qin/history/rollback',  // 发布记录回滚
  historyOffline: '/api/qin/history/offline',  // 记录下线
  pageBuild: '/api/qin/page/build',  // 页面搭建
  pagePublish: '/api/qin/page/publish',  // 页面发布
}
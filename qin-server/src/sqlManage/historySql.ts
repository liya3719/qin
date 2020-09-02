/*
 * @description: 发布历史SQL
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-09-02 11:24:13
 * @LastEditors: liya
 * @LastEditTime: 2020-09-02 20:21:49
 */
export class HistorySql {
  // 获取发布历史列表
  static getHistoryList = `
    select * from qin.qin_page_publish where page_id = ? 
    order by publish_time desc limit {start}, {end}`;
  // 回滚操作，当前page_id和指定version去回滚
  static historyRollBack = `
    update qin.qin_page_publish set publish_version = ? where page_id =?`;
  // 下线操作，当前page_id对保存数据库的线上url版本置为空
  static historyOffline = `
    update qin.qin_page_publish set publish_version = ? where page_id = ?`;
}
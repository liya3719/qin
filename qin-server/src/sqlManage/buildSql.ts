/*
 * @description: 创建/编辑 SQL
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-09-02 11:24:22
 * @LastEditors: liya
 * @LastEditTime: 2020-09-02 14:43:08
 */

export class BuildSql {
  // 新建页面 - 插入页面配置信息
  static insertPageConfig = `insert into qin.page set ?`;
  // 编辑页面 - 更新动作 - 对页面所需要的字段全部更新
  static updatePageConfig = `update qin.page set 
    page_config = ? 
    page_version = ?
    page_type = ?
    page_column = ?
    where page_id = ?`;
}
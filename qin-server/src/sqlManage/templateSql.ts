/*
 * @description: 模板SQL
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-09-02 11:24:13
 * @LastEditors: liya
 * @LastEditTime: 2020-09-02 20:22:24
 */
export class TemplateSql {
  // 获取模板列表
  static getTemplate = `
    select * from qin.qin_template order by template_date desc limit {start}, {end}`;
  // 设置模板为我的收藏
  static setTemplateCollect = `
    update qin.qin_template set is_collect = ? where template_id = ?`;
}
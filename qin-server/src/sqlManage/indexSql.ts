/*
 * @description: 
 * @version: 
 * @Author: liya
 * @Date: 2020-08-31 19:51:09
 * @LastEditors: liya
 * @LastEditTime: 2020-09-02 11:24:00
 */
/**
 * 示例SQL
 * @class
 */

export class IndexSql {
  static example: string = `
    select
    count(example_name) as example
    from example_table
    where example_name = ?
  `;
}
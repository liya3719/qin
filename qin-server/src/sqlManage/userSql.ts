/*
 * @description: 用户表相关SQL查询
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-09-08 16:17:05
 * @LastEditors: liya
 * @LastEditTime: 2020-09-18 16:19:06
 */
export class UserSql {
  // 注册用户插入数据到数据表
  static registry = `insert into qin.qin_user set ?`;
  // 注册查询当前用户名是否存在于数据表中
  static queryUser = `select count(user_name) as count from qin.qin_user where user_name = ?`;
  // 登录查询当前数据表中是否存在该用户名和密码是否正确
  static login = `select count(user_name) as count from qin.qin_user where user_name = ? and user_password = ?`;
}
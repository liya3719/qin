/*
 * @description: 注册用户数据实体
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-09-08 16:40:10
 * @LastEditors: liya
 * @LastEditTime: 2020-09-08 20:20:47
 */
export module UserModel {
  export class UserInfoModel {
    // 用户昵称
    userName: string;
    // 用户密码
    userPassword: any;
    // 用户手机号 非必填
    userPhone?: number;
  }
}
/*
 * @description: 
 * @version: 
 * @Author: liya
 * @Date: 2020-09-08 19:41:52
 * @LastEditors: liya
 * @LastEditTime: 2020-09-08 19:45:13
 */
export module userModel {
  export class UserInfoModel {
    // 用户名、昵称
    userName: string;
    // 用户密码
    userPassword: any;
    // 用户手机号
    userPhone?: number;
  }
}
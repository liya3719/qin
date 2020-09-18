/*
 * @description: 用户表接口定义
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-09-08 16:38:08
 * @LastEditors: liya
 * @LastEditTime: 2020-09-08 20:07:43
 */
import { Response } from './ICommonInterface';
import { UserModel } from '../../models/userModel';
export interface IUserInterface {
  /**
   * @description 查询用户是否存在
   * @param userModel 
   */
  queryRegistryAccount(userModel: UserModel.UserInfoModel): Promise<Boolean>;
  /**
   * @description 数据库中不存在则注册
   * @param userMode 
   */
  registryAccountAction(userModel: UserModel.UserInfoModel): Promise<Response>;
  /**
   * @description 登录
   * @param userModel 
   */
  loginAction(userModel: UserModel.UserInfoModel): Promise<Response>;
}
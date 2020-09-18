/*
 * @description: 
 * @version: 
 * @Author: liya
 * @Date: 2020-09-08 19:39:30
 * @LastEditors: liya
 * @LastEditTime: 2020-09-08 19:44:40
 */
import { IResponse } from './IMainService';
import { userModel } from '../model/userModel';
export interface IUserInterface {
  registry(userModel: userModel.UserInfoModel): Promise<IResponse>;
  login(userModel: userModel.UserInfoModel): Promise<IResponse>;
}
/*
 * @description: 
 * @version: 
 * @Author: liya
 * @Date: 2020-09-08 19:45:28
 * @LastEditors: liya
 * @LastEditTime: 2020-09-08 20:27:39
 */
import { IUserInterface } from '../interface/IUserServicet';
import { Service } from 'typedi';
import { userModel } from '@/model/userModel';
import { CommonService } from './commonService';
import apis from '@/api/main';
@Service()
export class UserService implements IUserInterface {
  registry(UserModel: userModel.UserInfoModel): Promise<any> {
    const result = CommonService._post(apis.registry, {...UserModel});
    return result;
  }
  login(UserModel: userModel.UserInfoModel): Promise<any> {
    const result = CommonService._post(apis.login, {UserModel});
    return result;
  }
  
}
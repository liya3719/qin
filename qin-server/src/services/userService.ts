/*
 * @description: 
 * @version: 
 * @Author: liya
 * @Date: 2020-09-08 16:51:04
 * @LastEditors: liya
 * @LastEditTime: 2020-09-08 20:43:01
 */
import { Service, Inject } from 'typedi';
import { UserModel } from '../models/userModel';
import { IUserInterface } from '../interface/services/IUserInterface';
import { Response } from '../interface/services/ICommonInterface';
import { IDataAccess } from '../interface/dataAccess/IDataAccess';
import { UserSql } from '../sqlManage/userSql';
@Service('userService')
export class UserService implements IUserInterface {
  @Inject('dataAccess')
  dataAccessInstance: IDataAccess
  async queryRegistryAccount(userModel: UserModel.UserInfoModel): Promise<Boolean> {
    console.log(`service userModel --------------`, userModel);
    const result = await this.dataAccessInstance.execSql(UserSql.queryUser, [userModel.userName]);
    let count = result.result[0].count;
    count = count > 0 ? true : false;
    return count;
  }
  async registryAccountAction(userMode: UserModel.UserInfoModel): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  async loginAction(userModel: UserModel.UserInfoModel): Promise<Response> {
    throw new Error("Method not implemented.");
  }
}
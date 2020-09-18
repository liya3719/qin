/*
 * @description: 
 * @version: 
 * @Author: liya
 * @Date: 2020-09-08 16:54:23
 * @LastEditors: liya
 * @LastEditTime: 2020-09-18 16:01:30
 */
import { Controller, Post, Body } from 'routing-controllers';
import { Inject } from 'typedi';
import { IUserInterface } from '../interface/services/IUserInterface';
import { Response } from '../interface/services/ICommonInterface';
import { UserModel } from '../models/userModel';
import { CryptoPassword } from '../common/crypto/cryptoPassword';
const cryptoService = new CryptoPassword();
@Controller('/api/qin/user')
export class UserController {
  @Inject('userService')
  userServiceInstance: IUserInterface
  @Post('/registry')
  async registryAccountAction(@Body() userModel: UserModel.UserInfoModel): Promise<Response> {
    console.log(`controller userModel ----------`, userModel);
    const enCrypto = cryptoService.enCrypto(userModel.userPassword);
    console.log(`enCrypto-------------`, enCrypto);
    const deCrypto = cryptoService.deCrypto(enCrypto);
    console.log(`deCrypto-------------`, deCrypto);
    const result:Boolean = await this.userServiceInstance.queryRegistryAccount(userModel);
    console.log(`queryRegistryAccount result-----------------------`, result);
    return {
      errStr: 'success',
      errNo: 0,
      data: []
    }
  }

  @Post('/login')
  async loginAccountAction(@Body() userModel: UserModel.UserInfoModel): Promise<Response> {
    console.log(userModel);
    return {
      errStr: 'success',
      errNo: 0,
      data: []
    }
  };
}
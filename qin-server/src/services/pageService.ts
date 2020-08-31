/*
 * @description: 页面搭建服务
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-27 21:15:13
 * @LastEditors: liya
 * @LastEditTime: 2020-08-28 11:12:23
 */
import { Service, Inject } from 'typedi';
import { IPageInterface } from '../interface/services/IPageInterface';
import { IDataAccess } from '../interface/dataAccess/IDataAccess';
@Service('pageService')
export class PageService implements IPageInterface {
  /**
   * @description 页面搭建服务
   */
  @Inject('dataAccess')
  dataAccessInstance: IDataAccess;
  async pageBuild() {}
}
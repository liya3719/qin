/*
 * @description: 页面搭建服务
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-27 21:15:13
 * @LastEditors: liya
 * @LastEditTime: 2020-09-01 20:41:29
 */
import { Service, Inject } from 'typedi';
import { IPageInterface } from '../interface/services/IPageInterface';
import { IDataAccess } from '../interface/dataAccess/IDataAccess';
import { Response } from '../interface/services/ICommonInterface';
@Service('pageService')
export class PageService implements IPageInterface {
  /**
   * @description 页面搭建服务
   */
  @Inject('dataAccess')
  dataAccessInstance: IDataAccess;
  async pageEdit(pageType: string, paramsData: any, pageColumn?: string): Promise<Response> {
    console.log(pageType, paramsData, pageColumn);
    return {
      errStr: 'success',
      errNo: 0,
      data: []
    }
  }
}
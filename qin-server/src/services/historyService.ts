/*
 * @description: 发布历史服务
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-28 11:07:45
 * @LastEditors: liya
 * @LastEditTime: 2020-09-03 15:29:08
 */
import { Service, Inject } from 'typedi';
import { IHistoryInterface } from '../interface/services/IHistoryInterface';
import { IDataAccess } from '../interface/dataAccess/IDataAccess';
import { Response } from '../interface/services/ICommonInterface';
import { HistorySql } from '../sqlManage/historySql';

@Service('historyService')
export class HistoryService implements IHistoryInterface {
  // 注入数据库操作服务
  @Inject('dataAccess')
  dataAccessInstance: IDataAccess
  

  async getHistoryList(pageIndex: number, pageSize: number): Promise<Response> {
    console.log(pageIndex, pageSize);
    const start = ((pageIndex - 1) * pageSize).toString();
    const end = pageSize.toString();
    let queryHistoryList = HistorySql.getHistoryList;
    queryHistoryList = queryHistoryList.replace(/{start}/gi, start);
    queryHistoryList = queryHistoryList.replace(/{end}/, end);
    const result = await this.dataAccessInstance.execSql(queryHistoryList, []);
    const data = result.result;
    return {
      errNo: 0,
      errStr: 'success',
      data: data
    }
  };


  async historyRollBack(pageId: number, pageVersion: string): Promise<Response> {
    return {
      errStr: 'success',
      errNo: 0,
      data: []
    };
  }

  
  async historyOffline(pageId: number, pageSize: string): Promise<Response> {
    return {
      errStr: 'success',
      errNo: 0,
      data: []
    };
  }
}

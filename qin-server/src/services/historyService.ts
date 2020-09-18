/*
 * @description: 发布历史服务
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-28 11:07:45
 * @LastEditors: liya
 * @LastEditTime: 2020-09-08 20:22:23
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
    const res = await this.dataAccessInstance.execSql(HistorySql.queryHistoryListByPageId, [pageId]);
    let pageUrl = res.result[0].page_url;
    pageUrl = pageUrl.replace(/\d(\.\d){2}/, pageVersion);
    const result = await this.dataAccessInstance.execSql(HistorySql.historyRollBack, [
      pageUrl,
      pageVersion,
      pageId,
    ]);
    if(result.result[0].insertId) {
      return {
        errStr: 'success',
        errNo: 0,
        data: []
      };
    }
  }

  
  async historyOffline(pageId: number, pageVersion: string): Promise<Response> {
    const res = await this.dataAccessInstance.execSql(HistorySql.queryHistoryListByPageId, [pageId]);
    let pageUrl = res.result[0].page_url;
    pageUrl = pageUrl.replace(/\d(\.\d){2}/, '404');
    const result = await this.dataAccessInstance.execSql(HistorySql.historyOffline, [
      pageUrl,
      3,
      pageId,
    ]);
    return {
      errStr: 'success',
      errNo: 0,
      data: []
    };
  }
}

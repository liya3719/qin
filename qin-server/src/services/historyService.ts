/*
 * @description: 发布历史服务
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-28 11:07:45
 * @LastEditors: liya
 * @LastEditTime: 2020-09-02 20:19:28
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
    
    return {
      errStr: 'success',
      errNo: 0,
      data: [{
        page_id: 1,
        page_name: 'test1',
        publish_author: 'liya',
        publish_version: ['1.0.0', '1.0.1', '1.0.2'],
        page_status: '运行中',
        publish_time: '2020/08/28 17:17',
      },{
        page_id: 2,
        page_name: 'test2',
        publish_author: 'liya',
        publish_version: ['1.0.1', '1.0.2', '1.0.3'],
        page_status: '已回滚',
        publish_time: '2020/08/28 17:21',
      }]
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

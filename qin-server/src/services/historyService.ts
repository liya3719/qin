/*
 * @description: 发布历史服务
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-28 11:07:45
 * @LastEditors: liya
 * @LastEditTime: 2020-08-31 15:47:53
 */
import { Service, Inject } from 'typedi';
import { IHistoryInterface } from '../interface/services/IHistoryInterface';
import { IDataAccess } from '../interface/dataAccess/IDataAccess';
@Service('historyService')
export class HistoryService implements IHistoryInterface {
  // 注入数据库操作服务
  @Inject('dataAccess')
  dataAccessInstance: IDataAccess
  async getHistoryList(): Promise<{
    errStr: string,
    errNo: number,
    data: any
  }> {
    return {
      errStr: 'success',
      errNo: 0,
      data: [{
        page_id: 1,
        publish_name: 'liya',
        publish_id: 6530,
        publish_version: ['1.0.0', '1.0.1', '1.0.2'],
        status: '运行中',
        publish_time: '2020/08/28 17:17',
      },{
        page_id: 2,
        publish_name: 'liya',
        publish_id: 6530,
        publish_version: ['1.0.1', '1.0.2', '1.0.3'],
        status: '已回滚',
        publish_time: '2020/08/28 17:21',
      }]
    }
  };
}

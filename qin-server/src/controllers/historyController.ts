/*
 * @description: 发布历史控制器
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-27 21:08:53
 * @LastEditors: liya
 * @LastEditTime: 2020-09-01 20:13:42
 */
import { JsonController, Get, Post, BodyParam } from 'routing-controllers';
import { Inject } from 'typedi';
import { IHistoryInterface } from '../interface/services/IHistoryInterface';
interface response {
  errStr: string,
  errNo: number,
  data: any[]
}
@JsonController('/api/qin')
export class HistoryController {
  @Inject('historyService')
  HistoryServiceInstance: IHistoryInterface​​
  /**
   * @description 获取发布历史列表
   */
  @Get('/history/list')
  async getHistoryList(): Promise<response> {
    const result = await this.HistoryServiceInstance.getHistoryList();
    console.log(result);
    return result;
  }
  /**
   * @description 数据回滚
   */
  @Post('/history/rollback')
  async historyRollBack(@BodyParam('pageId') pageId: number): Promise<response> {
    console.log(`pageId ----------`, pageId);
    const result = await this.HistoryServiceInstance.historyRollBack(pageId);
    return result;
  }
  /**
   * @description 数据下线
   */
  @Post('/history/offline')
  async historyOffLine(@BodyParam('pageId') pageId: number): Promise<response> {
    console.log(`pageId ----------`, pageId);
    const result = await this.HistoryServiceInstance.historyOffline(pageId);
    return result;
  }
}
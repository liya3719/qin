/*
 * @description: 发布历史控制器
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-27 21:08:53
 * @LastEditors: liya
 * @LastEditTime: 2020-09-08 20:22:00
 */
import { JsonController, Get, Post, BodyParam, QueryParam } from 'routing-controllers';
import { Inject } from 'typedi';
import { IHistoryInterface } from '../interface/services/IHistoryInterface';
import { Response } from '../interface/services/ICommonInterface';
@JsonController('/api/qin/history')
export class HistoryController {
  @Inject('historyService')
  HistoryServiceInstance: IHistoryInterface​​
  /**
   * @description 获取发布历史列表
   */
  @Get('/list')
  async getHistoryList(@QueryParam('pageIndex') pageIndex: number, @QueryParam('pageSize') pageSize: number): Promise<Response> {
    const result = await this.HistoryServiceInstance.getHistoryList(pageIndex, pageSize);
    return result;
  }
  /**
   * @description 数据回滚
   */
  @Post('/rollback')
  async historyRollBack(@BodyParam('pageId') pageId: number, @BodyParam('pageVersion') pageVersion: string): Promise<Response> {
    const result = await this.HistoryServiceInstance.historyRollBack(pageId, pageVersion);
    return result;
  }
  /**
   * @description 数据下线
   */
  @Post('/offline')
  async historyOffLine(@BodyParam('pageId') pageId: number, @BodyParam('pageVersion') pageVersion: string): Promise<Response> {
    const result = await this.HistoryServiceInstance.historyOffline(pageId, pageVersion);
    return result;
  }
}
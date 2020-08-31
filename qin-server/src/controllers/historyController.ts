/*
 * @description: 发布历史控制器
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-27 21:08:53
 * @LastEditors: liya
 * @LastEditTime: 2020-08-28 14:26:57
 */
import { Controller, Get, Post } from 'routing-controllers';
import { Inject } from 'typedi';
import { IHistoryInterface } from '../interface/services/IHistoryInterface';
@Controller('/api/qin')
export class HistoryController {
  @Inject('historyService')
  HistoryServiceInstance: IHistoryInterface​​
  /**
   * @description 获取发布历史列表
   */
  @Get('/history/list')
  async getHistoryList(): Promise<{
    errStr: string,
    errNo: number,
    data: any
  }> {
    const result = await this.HistoryServiceInstance.getHistoryList();
    console.log(result);
    return result;
  }
  /**
   * @description 数据回滚
   */
  @Post('/history/rollback')
  async historyRollBack() {}
  /**
   * @description 数据下线
   */
  @Post('/history/offline')
  async historyOffLine() {}
}
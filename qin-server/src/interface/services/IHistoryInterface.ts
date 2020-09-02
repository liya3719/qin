/*
 * @description: 发布历史记录接口
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-28 11:09:07
 * @LastEditors: liya
 * @LastEditTime: 2020-09-02 20:18:35
 */
import { Response } from './ICommonInterface';
export interface IHistoryInterface {
  /**
   * 获取发布历史记录
   */ 
  getHistoryList(pageIndex: number, pageSize: number): Promise<Response>;
  /**
   * @description 回滚当前页面
   * @param { number } pageId 页面id
   * @param { string } pageVersion 回滚版本号
   */
  historyRollBack(pageId: number, pageVersion: string): Promise<Response>;
  /**
   * @description 页面下线
   * @param { number } pageId 页面id
   * @param { string } pageVersion 下线版本号
   */
  historyOffline(pageId: number, pageVersion: string): Promise<Response>;
}
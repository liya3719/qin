/*
 * @description: 发布历史接口定义
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-28 15:21:22
 * @LastEditors: liya
 * @LastEditTime: 2020-09-01 19:45:24
 */
interface Response {
  errStr: string,
  errNo: number,
  data: any[],
}
export interface IHistoryInterface {
  /**
   *  获取发布历史列表
   */
  getHistoryList(): Promise<Response>;
  /**
   * @description 回滚
   * @param { number } pageId 页面id
   * @returns { Response }
   */
  historyRollBack(pageId: number): Promise<Response>;
  /**
   * @description 下线
   * @param { number } pageId 页面id
   * @returns { Response }
   */
  historyOffline(pageId: number): Promise<Response>;
}
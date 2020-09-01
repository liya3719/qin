/*
 * @description: 发布历史记录接口
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-28 11:09:07
 * @LastEditors: liya
 * @LastEditTime: 2020-09-01 17:29:41
 */
interface response {
  errStr: string,
  errNo: number,
  data: any,
}
export interface IHistoryInterface {
  /**
   * 获取发布历史记录
   */ 
  getHistoryList(): Promise<response>;
  /**
   * @description 回滚当前页面
   * @param { number } pageId 页面id
   */
  historyRollBack(pageId: number): Promise<response>;
  /**
   * @description 页面下线
   * @param { number } pageId 页面id
   */
  historyOffline(pageId: number): Promise<response>;
}
/*
 * @description: 发布历史接口定义
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-28 15:21:22
 * @LastEditors: liya
 * @LastEditTime: 2020-09-02 20:13:12
 */
interface Response {
  errStr: string,
  errNo: number,
  data: any[],
}
export interface IHistoryInterface {
  /**
   *  获取发布历史列表
   * @param { number } pageIndex 起始页码
   * @param { number } pageSize 每页展示条数
   */
  getHistoryList(pageIndex: number, pageSize: number): Promise<Response>;
  /**
   * @description 回滚
   * @param { number } pageId 页面id
   * @param { string } pageVersion 回滚指定版本
   * @returns { Response }
   */
  historyRollBack(pageId: number, pageVersion: string): Promise<Response>;
  /**
   * @description 下线
   * @param { number } pageId 页面id
   * @param { string } pageVersion 当前运行的版本
   * @returns { Response }
   */
  historyOffline(pageId: number, pageVersion: string): Promise<Response>;
}
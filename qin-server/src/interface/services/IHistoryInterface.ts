/*
 * @description: 发布历史记录接口
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-28 11:09:07
 * @LastEditors: liya
 * @LastEditTime: 2020-08-28 11:31:05
 */
export interface IHistoryInterface {
  getHistoryList(): Promise<{
    errStr: string,
    errNo: number,
    data: any
  }>;
}
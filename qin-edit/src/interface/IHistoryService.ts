/*
 * @description: 
 * @version: 
 * @Author: liya
 * @Date: 2020-08-28 15:21:22
 * @LastEditors: liya
 * @LastEditTime: 2020-08-28 15:22:12
 */
export interface IHistoryInterface {
  getHistoryList(): Promise<{
    errStr: string,
    errNo: number,
    data: any,
  }>;
}
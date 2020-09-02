/*
 * @description: 通用接口定义
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-09-01 20:38:22
 * @LastEditors: liya
 * @LastEditTime: 2020-09-01 20:38:57
 */
export interface Response {
  errStr: string,
  errNo: number,
  data: any[],
}
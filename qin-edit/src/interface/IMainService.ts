/*
 * @description: 通用接口定义
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-31 19:51:09
 * @LastEditors: liya
 * @LastEditTime: 2020-09-03 15:19:01
 */
export interface IResponse {
    errNo: number,
    errStr: string,
    data: any[],
}
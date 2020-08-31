/*
 * @description:  模板列表接口定义
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-28 11:08:12
 * @LastEditors: liya
 * @LastEditTime: 2020-08-28 11:29:45
 */
export interface ITemplateInterface {
  getTemplateList(): Promise<{
    errStr: string,
    errNo: number,
    data: any
  }>;
}
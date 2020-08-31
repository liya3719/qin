/*
 * @description: 模板列表接口定义
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-31 15:10:48
 * @LastEditors: liya
 * @LastEditTime: 2020-08-31 19:43:53
 */
export interface ITemplateInterface {
  getTemplateList(): Promise<{
    errNo: number,
    errStr: string,
    data: any,
  }>;
  setTemplateCollect(id: number): Promise<{
    errNo: number,
    errStr: string,
    data: any,
  }>;
}
/*
 * @description:  模板列表接口定义
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-28 11:08:12
 * @LastEditors: liya
 * @LastEditTime: 2020-09-01 15:48:29
 */
export interface ITemplateInterface {
  /**
   * 获取模板列表
   */
  getTemplateList(type?: number): Promise<{
    errStr: string,
    errNo: number,
    data: any
  }>;
  /**
   * 设为我的收藏
   */
  setTemplateCollect(id: number): Promise<{
    errStr: string;
    errNo: number,
    data: any
  }>
}
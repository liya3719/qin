/*
 * @description: 模板列表接口定义
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-31 15:10:48
 * @LastEditors: liya
 * @LastEditTime: 2020-09-01 15:33:48
 */
export interface ITemplateInterface {
  /*
  * 获取模板列表
  */
  getTemplateList(type?: number): Promise<{
    errNo: number,
    errStr: string,
    data: any,
  }>;
  /**
   * 设为我的收藏
   */
  setTemplateCollect(id: number): Promise<{
    errNo: number,
    errStr: string,
    data: any,
  }>;
}
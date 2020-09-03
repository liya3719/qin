/*
 * @description: 模板列表接口定义
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-31 15:10:48
 * @LastEditors: liya
 * @LastEditTime: 2020-09-03 15:26:19
 */
import { IResponse } from './IMainService';
export interface ITemplateInterface {
  /*
  * 获取模板列表
  */
  getTemplateList(pageIndex: number, pageSize: number, type?: number): Promise<IResponse>;
  /**
   * 设为我的收藏
   */
  setTemplateCollect(id: number): Promise<IResponse>;
}
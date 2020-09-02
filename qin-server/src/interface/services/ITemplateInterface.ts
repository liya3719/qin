/*
 * @description:  模板列表接口定义
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-28 11:08:12
 * @LastEditors: liya
 * @LastEditTime: 2020-09-01 20:43:50
 */
import { Response } from './ICommonInterface';
export interface ITemplateInterface {
  /**
   * 获取模板列表
   */
  getTemplateList(type?: number): Promise<Response>;
  /**
   * 设为我的收藏
   */
  setTemplateCollect(id: number): Promise<Response>
}
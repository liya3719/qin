/*
 * @description: 模板相关服务层
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-31 15:14:03
 * @LastEditors: liya
 * @LastEditTime: 2020-09-08 15:50:46
 */
import { Service } from 'typedi';
import { CommonService } from './commonService';
import { ITemplateInterface } from '../interface/ITemplateService';
import api from '@/api/main';
@Service('templateService')
export class TemplateService implements ITemplateInterface {
  /**
   * @description 获取模板列表
   * @param { number } pageIndex 当前页码
   * @param { number } pageSize 每页展示多少条
   * @param { number } type 类型
   * @returns { Object }
   */
  getTemplateList(pageIndex: number, pageSize: number, type?: number): Promise<any> {
    const result =  CommonService._get(api.templateList, {
      pageIndex,
      pageSize,
      type,
    });
    return result;
  }
  /**
   * @description 设为收藏模板
   * @param { number } id 模板id
   */
  setTemplateCollect(templateId: number): Promise<any> {
    const result =  CommonService._post(api.templateCollect, {
      templateId,
    });
    return result;
  }
}
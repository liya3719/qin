/*
 * @description: 模板相关服务层
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-31 15:14:03
 * @LastEditors: liya
 * @LastEditTime: 2020-08-31 19:43:11
 */
import { Service } from 'typedi';
import { CommonService } from './commonService';
import { ITemplateInterface } from '../interface/ITemplateService';
import api from '@/api/main';
@Service('templateService')
export class TemplateService implements ITemplateInterface {
  /**
   * @description 获取模板列表
   * @returns { Object }
   */
  getTemplateList(): Promise<any> {
    return CommonService._get(api.templateList, {});
  }
  /**
   * @description 设为收藏模板
   * @param { number } id 模板id
   */
  setTemplateCollect(id: number): Promise<any> {
    return CommonService._post(api.templateCollect, {
      id,
    })
  }
}